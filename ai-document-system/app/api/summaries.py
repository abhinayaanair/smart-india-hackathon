from fastapi import APIRouter
from app.services.llm_service import LLMService
from app.services.summarization_service import SummarizationService
from dotenv import load_dotenv
import os


router = APIRouter(tags=["summaries"])


def get_summarizer() -> SummarizationService | None:
    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return None
    llm = LLMService(api_key=api_key)
    return SummarizationService(llm_service=llm)


@router.get("/summaries")
def get_summary(type: str = "short", document_id: str | None = None, text: str | None = None):
    summarizer = get_summarizer()
    if summarizer is None:
        return {"error": "Missing OPENAI_API_KEY"}
    
    # Handle document_id by looking up cached text from processing
    source_text = text or ""
    if document_id and not text:
        # Import here to avoid circular imports
        from app.api.processing import DOCUMENT_LAST_RESULT
        cached_result = DOCUMENT_LAST_RESULT.get(document_id)
        if cached_result:
            source_text = cached_result.get("text", "")
        else:
            return {"error": f"Document {document_id} not processed yet. Please process the document first using POST /api/process/{document_id}"}
    
    if not source_text:
        return {"error": "No text provided. Either provide 'text' parameter or ensure document is processed with 'document_id'"}
    
    summary = summarizer.summarize_document(source_text, summary_type=type)
    return {"summary": summary, "word_count": len(summary.split()), "status": "success"}


