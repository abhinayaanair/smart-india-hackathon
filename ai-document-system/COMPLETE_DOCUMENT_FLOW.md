# SIH-AI API - Complete Document Processing Flow

## Overview
This document outlines the complete end-to-end workflow for processing documents in the SIH-AI system, from upload to querying and summarization.

## Complete Document Processing Flow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   1. UPLOAD     │───▶│  2. PROCESS     │───▶│ 3. EMBEDDINGS   │───▶│  4. QUERY/      │
│   Document      │    │   (OCR/Text)    │    │   (Indexing)    │    │   SUMMARIZE     │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Step-by-Step Flow

### Step 1: Upload Document
**Endpoint**: `POST /api/upload`

**Purpose**: Upload a document file to the system

**Request**:
```http
POST /api/upload
Content-Type: multipart/form-data

{
  "file": [binary file - PDF, PNG, JPG, etc.]
}
```

**Response**:
```json
{
  "document_id": "abc123",
  "filename": "Sample.pdf",
  "size_bytes": 123456,
  "status": "uploaded"
}
```

**What happens**:
- File is saved to `documents/` directory
- Unique document ID is generated
- File metadata is stored in memory registry

---

### Step 2: Process Document (OCR/Text Extraction)
**Endpoint**: `POST /api/process/{document_id}`

**Purpose**: Extract text from the uploaded document using OCR

**Request**:
```http
POST /api/process/abc123
Content-Type: application/json

{
  "auto_translate_to_en": true  // Optional
}
```

**Response**:
```json
{
  "document_id": "abc123",
  "pages": 10,
  "text": "...extracted text from all pages...",
  "page_details": [
    {
      "page_number": 1,
      "text": "...page 1 text...",
      "word_count": 250,
      "images_found": 2,
      "tables_detected": 0
    }
  ],
  "metadata": {
    "title": "Document Title",
    "author": "Author Name",
    "producer": "PDF Producer",
    "creation_date": "2024-01-01"
  },
  "images_found": 3,
  "tables_detected": 1,
  "quality_analysis": {
    "overall_quality_score": 82,
    "extraction_success_rate": 90.0
  },
  "status": "processed"
}
```

**What happens**:
- OCR processing using Tesseract
- Text extraction from all pages
- Image and table detection
- Quality analysis
- Optional translation to English
- Results stored in memory for next step

---

### Step 3: Generate Embeddings (Indexing)
**Endpoint**: `POST /api/embeddings/{document_id}`

**Purpose**: Create vector embeddings and build searchable index

**Request**:
```http
POST /api/embeddings/abc123
Content-Type: application/json

{
  "chunk_size": 1000,  // Optional, default: 1000
  "overlap": 200       // Optional, default: 200
}
```

**Response**:
```json
{
  "document_id": "abc123",
  "total_chunks": 19,
  "embedding_dimension": 1024,
  "index_type": "IndexFlatIP",
  "status": "indexed"
}
```

**What happens**:
- Text is chunked into smaller pieces (with overlap)
- Each chunk is converted to vector embeddings using BAAI/bge-large-en-v1.5 model
- FAISS index is built for fast similarity search
- Chunks and embeddings are saved to disk
- Document becomes searchable

---

### Step 4A: Query Documents (RAG)
**Endpoint**: `POST /api/query`

**Purpose**: Ask questions and get AI-generated answers with citations

**Request**:
```http
POST /api/query
Content-Type: application/json

{
  "query": "What are the key safety protocols mentioned?",
  "k": 5,           // Optional, number of relevant chunks to retrieve
  "threshold": 0.4  // Optional, similarity threshold
}
```

**Response**:
```json
{
  "query": "What are the key safety protocols mentioned?",
  "results": [
    {
      "filename": "Sample.pdf",
      "chunk_id": 7,
      "text": "...relevant text chunk...",
      "similarity_score": 0.83,
      "confidence": "HIGH",
      "page_number": 3
    }
  ],
  "answer": "Based on the document, the key safety protocols include...",
  "citations": [
    {
      "filename": "Sample.pdf",
      "chunk_id": 7,
      "page_number": 3
    }
  ]
}
```

**What happens**:
- Query is converted to vector embedding
- Similar chunks are retrieved from FAISS index
- Relevant context is sent to OpenAI GPT-4
- AI generates answer with source citations

---

### Step 4B: Generate Summary
**Endpoint**: `GET /api/summaries`

**Purpose**: Generate different types of summaries

**Option 1: Using document_id (after processing)**
```http
GET /api/summaries?type=executive&document_id=abc123
```

**Option 2: Using direct text**
```http
GET /api/summaries?type=executive&text=...extracted text from step 2...
```

**Response**:
```json
{
  "summary": "• Key safety incidents decreased by 15% in Q1\n• New safety protocols implemented\n• Budget allocation increased for safety equipment",
  "word_count": 32,
  "status": "success"
}
```

**What happens**:
- If using `document_id`: Looks up cached text from processing step
- If using `text`: Uses provided text directly
- Text is sent to OpenAI GPT-4 with specific prompt template
- Summary is generated based on type (executive, technical, general, short)
- Word count is calculated

**Error Response** (if document not processed):
```json
{
  "error": "Document abc123 not processed yet. Please process the document first using POST /api/process/abc123"
}
```

---

## Alternative Flows

### Direct Text Processing (Skip Upload)
You can also process text directly without uploading a file:

```http
GET /api/summaries?type=executive&text=Your raw text here
```

### Batch Processing
**Endpoint**: `POST /api/process/batch`

Process multiple documents from a folder:

```http
POST /api/process/batch
Content-Type: application/json

{
  "folder": "./documents",
  "auto_translate_to_en": true
}
```

### Knowledge Graph Integration
**Endpoint**: `POST /api/knowledge-graph/ingest`

Extract entities and relationships:

```http
POST /api/knowledge-graph/ingest
Content-Type: application/json

{
  "document_id": "abc123",
  "text": "...document text..."
}
```

---

## Complete Example Workflow

Here's a complete example of processing a document from start to finish:

### 1. Upload Document
```bash
curl -X POST "http://localhost:8000/api/upload" \
  -F "file=@safety_report.pdf"
```

**Response**: `{"document_id": "abc123", "filename": "safety_report.pdf", "status": "uploaded"}`

### 2. Process Document
```bash
curl -X POST "http://localhost:8000/api/process/abc123" \
  -H "Content-Type: application/json" \
  -d '{"auto_translate_to_en": true}'
```

**Response**: `{"document_id": "abc123", "pages": 5, "text": "...", "status": "processed"}`

### 3. Generate Embeddings
```bash
curl -X POST "http://localhost:8000/api/embeddings/abc123" \
  -H "Content-Type: application/json" \
  -d '{"chunk_size": 1000, "overlap": 200}'
```

**Response**: `{"document_id": "abc123", "total_chunks": 12, "status": "indexed"}`

### 4A. Query Document
```bash
curl -X POST "http://localhost:8000/api/query" \
  -H "Content-Type: application/json" \
  -d '{"query": "What safety incidents occurred?", "k": 3}'
```

### 4B. Generate Summary
```bash
# Option 1: Using document_id (after processing)
curl -X GET "http://localhost:8000/api/summaries?type=executive&document_id=abc123"

# Option 2: Using direct text
curl -X GET "http://localhost:8000/api/summaries?type=executive&text=...extracted text..."
```

---

## Data Flow Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Upload    │    │   OCR       │    │ Embeddings  │    │   Query     │
│   Service   │───▶│  Service    │───▶│  Service    │───▶│  Service    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │                   │
       ▼                   ▼                   ▼                   ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  File       │    │  Text       │    │  Vector     │    │  AI         │
│  Storage    │    │  Extraction │    │  Index      │    │  Response   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

## Key Services Used

1. **OCR Service** (`AdvancedDocumentProcessor`)
   - Tesseract OCR for text extraction
   - Image and table detection
   - Quality analysis

2. **Embedding Service** (`EmbeddingService`)
   - Text chunking with overlap
   - Vector embeddings using BAAI/bge-large-en-v1.5
   - FAISS index management

3. **LLM Service** (`LLMService`)
   - OpenAI GPT-4 integration
   - Query answering with citations
   - Summary generation

4. **Summarization Service** (`SummarizationService`)
   - Multiple summary types
   - Role-based prompts
   - Word count tracking

## File Storage Structure

```
ai-document-system/
├── documents/           # Uploaded files
│   ├── sample.pdf
│   └── safety_report.pdf
├── embeddings/          # Vector indexes
│   ├── document_index.faiss
│   ├── chunks.pkl
│   └── metadata.json
└── app/services/        # Service implementations
    ├── ocr_service.py
    ├── embedding_service.py
    ├── llm_service.py
    └── summarization_service.py
```

## Error Handling

### Common Error Scenarios

1. **Document Not Found** (404)
   ```json
   {"detail": "document_not_processed"}
   ```

2. **Missing API Key** (500)
   ```json
   {"error": "Missing OPENAI_API_KEY"}
   ```

3. **Processing Failed** (500)
   ```json
   {"error": "OCR processing failed"}
   ```

## Performance Considerations

- **Chunk Size**: Larger chunks (1000+ words) for better context, smaller chunks (250-500) for precision
- **Overlap**: 200-word overlap prevents context loss at chunk boundaries
- **Batch Processing**: Use batch endpoints for multiple documents
- **Caching**: Embeddings are cached on disk for reuse

## Next Steps After Processing

Once a document is fully processed, you can:

1. **Query** with natural language questions
2. **Summarize** in different formats
3. **Check Compliance** against predefined rules
4. **Extract Knowledge Graph** entities and relationships
5. **Reindex** if document is updated
6. **Delete** from index if no longer needed

---

*This flow represents the complete document processing pipeline in the SIH-AI system. Each step builds upon the previous one, creating a comprehensive document understanding and querying system.*
