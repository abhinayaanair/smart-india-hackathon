# SIH-AI API - Summary Flow Documentation

## Overview
The SIH-AI API provides a comprehensive document summarization service that can generate different types of summaries based on user requirements. This document outlines the complete flow to get summaries from the API.

## Summary API Endpoint

### Endpoint Details
- **URL**: `GET /api/summaries`
- **Method**: GET
- **Tags**: summaries

### Request Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `type` | string | No | "short" | Summary type: `short`, `general`, `executive`, `technical` |
| `document_id` | string | No | null | ID of the document to summarize (optional) |
| `text` | string | No | null | Direct text input to summarize (optional) |

### Available Summary Types

1. **`short`** (Default)
   - Concise, well-structured summary
   - Captures main ideas, key arguments, and overall conclusion

2. **`general`**
   - Standard document summary
   - Balanced overview of content

3. **`executive`**
   - High-level summary in 3-4 bullet points
   - Focuses on actionable items, key findings, strategic implications
   - Ignores background information and minor details

4. **`technical`**
   - Detailed summary for technical audience
   - Focuses on methodology, data points, experimental results, technical conclusions

## Request Examples

### 1. Basic Summary Request
```http
GET /api/summaries?type=short&text=Your document text here
```

### 2. Executive Summary Request
```http
GET /api/summaries?type=executive&text=Your document text here
```

### 3. Technical Summary Request
```http
GET /api/summaries?type=technical&text=Your document text here
```

### 4. Using Document ID (Future Implementation)
```http
GET /api/summaries?type=general&document_id=abc123
```

## Response Format

### Success Response (200 OK)
```json
{
  "summary": "Generated summary text here...",
  "word_count": 124,
  "status": "success"
}
```

### Error Response
```json
{
  "error": "Missing OPENAI_API_KEY"
}
```

## Complete Document Processing Flow

To get a summary from a document, follow this complete flow:

### Step 1: Upload Document
```http
POST /api/upload
Content-Type: multipart/form-data

{
  "file": [binary file],
  "title": "Document Title",
  "category": "policy",
  "description": "Document description",
  "department": "Operations",
  "language": "en",
  "priority": "high",
  "access_scope": "shared",
  "shared_departments[]": ["Operations", "Compliance"]
}
```

**Response:**
```json
{
  "document_id": "abc123",
  "filename": "Sample.pdf",
  "size_bytes": 123456,
  "metadata": {
    "title": "Q1 Safety Update",
    "category": "safety",
    "description": "Monthly summary of incidents and mitigations",
    "department": "Operations",
    "language": "en",
    "priority": "high",
    "access": {
      "scope": "shared",
      "shared_departments": ["Operations", "Compliance"]
    }
  },
  "status": "uploaded"
}
```

### Step 2: Process Document (OCR/Text Extraction)
```http
POST /api/process/abc123
Content-Type: application/json

{
  "auto_translate_to_en": true
}
```

**Response:**
```json
{
  "document_id": "abc123",
  "pages": 10,
  "text": "...extracted text...",
  "metadata": {
    "title": "",
    "author": "",
    "producer": "",
    "creation_date": ""
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

### Step 3: Generate Summary
```http
GET /api/summaries?type=executive&text=...extracted text from step 2...
```

**Response:**
```json
{
  "summary": "• Key safety incidents decreased by 15% in Q1\n• New safety protocols implemented across all departments\n• Budget allocation increased for safety equipment\n• Next review scheduled for end of Q2",
  "word_count": 32,
  "status": "success"
}
```

## Alternative: Direct Text Summarization

You can also summarize text directly without uploading a document:

```http
GET /api/summaries?type=technical&text=Your raw text content here
```

## Technical Implementation Details

### Backend Services Used
1. **SummarizationService**: Core summarization logic
2. **LLMService**: OpenAI GPT-4 integration
3. **OCRService**: Document text extraction (if using document_id)

### OpenAI Configuration
- **Model**: GPT-4o
- **Max Tokens**: 400
- **Temperature**: 0.3
- **API Key**: Required via environment variable `OPENAI_API_KEY`

### Prompt Templates
Each summary type uses specific prompt templates:

- **General**: "Provide a concise, well-structured summary of the following document. Capture the main ideas, key arguments, and overall conclusion."

- **Executive**: "You are summarizing a document for a busy executive. Provide a high-level summary in 3-4 bullet points. Focus ONLY on actionable items, key findings, strategic implications, and any mentioned deadlines or risks. Ignore background information and minor details."

- **Technical**: "Provide a detailed summary for a technical audience. Focus on the methodology, specific data points, experimental results, and technical conclusions mentioned in the document."

## Error Handling

### Common Error Scenarios
1. **Missing API Key**: Returns `{"error": "Missing OPENAI_API_KEY"}`
2. **Invalid Summary Type**: Falls back to 'general' type
3. **Empty Text**: Returns empty summary
4. **OpenAI API Errors**: Returns error message in summary field

## Best Practices

1. **Text Length**: For optimal results, provide text between 100-5000 words
2. **Summary Type Selection**:
   - Use `executive` for business stakeholders
   - Use `technical` for technical teams
   - Use `general` for general audiences
   - Use `short` for quick overviews

3. **Performance**: Direct text input is faster than document processing
4. **Caching**: Consider caching summaries for frequently accessed documents

## Integration Examples

### JavaScript/Fetch
```javascript
const getSummary = async (text, type = 'short') => {
  const response = await fetch(`/api/summaries?type=${type}&text=${encodeURIComponent(text)}`);
  const data = await response.json();
  return data;
};

// Usage
const summary = await getSummary("Your document text here", "executive");
console.log(summary.summary);
```

### Python/Requests
```python
import requests

def get_summary(text, summary_type="short"):
    url = "http://localhost:8000/api/summaries"
    params = {
        "type": summary_type,
        "text": text
    }
    response = requests.get(url, params=params)
    return response.json()

# Usage
summary = get_summary("Your document text here", "technical")
print(summary["summary"])
```

### cURL
```bash
curl -X GET "http://localhost:8000/api/summaries?type=executive&text=Your%20document%20text%20here"
```

## Future Enhancements

1. **Document ID Support**: Full implementation of document_id parameter for cached text lookup
2. **Batch Summarization**: Support for multiple documents
3. **Custom Prompts**: User-defined summary templates
4. **Summary Caching**: Redis-based caching for improved performance
5. **Multi-language Support**: Automatic language detection and appropriate summarization

---

*This documentation covers the current implementation of the SIH-AI Summary API. For the most up-to-date information, refer to the OpenAPI specification at `/openapi.json`.*
