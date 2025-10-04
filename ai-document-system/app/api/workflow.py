# in app/api/workflow.py
from fastapi import APIRouter, File, UploadFile, HTTPException
import os
import shutil
import uuid
from dotenv import load_dotenv

# --- CORRECTED IMPORTS AND INITIALIZATIONS ---
# Import the correct class and method names from your existing services
from app.services.ocr_service import AdvancedDocumentProcessor
from app.services.summarization_service import SummarizationService
from app.services.embedding_service import EmbeddingService
from app.services.llm_service import LLMService

router = APIRouter(tags=["workflow"])

# Load environment variables
load_dotenv()

# Initialize services with the correct class names
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment variables")

llm_service = LLMService(api_key=api_key)
ocr_processor = AdvancedDocumentProcessor()
summarizer = SummarizationService(llm_service=llm_service)
embedder = EmbeddingService(model_name='BAAI/bge-large-en-v1.5')

FAISS_INDEX_DIR = "faiss_indexes"
os.makedirs(FAISS_INDEX_DIR, exist_ok=True)


@router.post("/process-document", tags=["Workflow"])
async def process_document_fully(file: UploadFile = File(...)):
    """
    This single endpoint handles the entire initial processing pipeline.
    """
    temp_file_path = f"temp_{uuid.uuid4().hex}_{file.filename}"
    try:
        with open(temp_file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # 1. Parse the document using the correct method name
        print("Step 1: Parsing document...")
        parsed_data = ocr_processor.process_document(temp_file_path) # Corrected
        full_text = parsed_data.get("text")
        page_details = parsed_data.get("page_details")

        if not full_text:
            raise HTTPException(status_code=400, detail="Failed to extract text from document.")

        # 2. Generate the summary
        print("Step 2: Generating summary...")
        summary = summarizer.summarize_document(full_text, summary_type='general')

        # 3. Create the FAISS search index
        print("Step 3: Creating search index...")
        document_id = str(uuid.uuid4().hex)
        
        chunks = embedder.process_and_chunk_pages(file.filename, page_details, 250, 50)
        build_result = embedder.build_index(chunks)
        
        if 'error' in build_result:
            raise HTTPException(status_code=500, detail=f"Failed to build index: {build_result['error']}")
        
        # The index is saved automatically by the build_index method
        faiss_index_path = "embeddings/document_index.faiss"  # Default path used by EmbeddingService 
        
        print("Processing complete.")
        
        # 4. Return everything the Node.js backend needs
        return {
            "success": True,
            "filename": file.filename,
            "summary": summary,
            "faiss_index_path": faiss_index_path,
        }
    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)