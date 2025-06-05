import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return {
    llmExamples: [
      {
        "name": "ChatGPT",
        "description": "Modelo conversacional desarrollado por OpenAI.",
        "url": "https://chat.openai.com/",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
      },
      {
        "name": "Gemini",
        "description": "Familia de modelos de lenguaje multimodal y generativos de Google.",
        "url": "https://gemini.google.com/",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Gemini_logo.svg/1200px-Gemini_logo.svg.png"
      },
      {
        "name": "Claude",
        "description": "Asistente de IA útil y honesto.",
        "url": "https://claude.ai/",
        "imageUrl": "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_61ed16121c47b56ef384b6b798b0f0e5/claude-2.png"
      },
      {
        "name": "TensorFlow",
        "description": "Plataforma de código abierto de extremo a extremo para aprendizaje automático.",
        "url": "https://www.tensorflow.org/",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TensorFlow_logo_and_wordmark.svg/1200px-TensorFlow_logo_and_wordmark.svg.png" // Publicly available image
      },
      {
        "name": "PyTorch",
        "description": "Framework de aprendizaje automático de código abierto basado en la biblioteca Torch.",
        "url": "https://pytorch.org/",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png"
      },
      {
        "name": "OpenCV",
        "description": "Biblioteca de código abierto para visión por computadora y aprendizaje automático.",
        "url": "https://opencv.org/",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_logo_black_text.svg/1200px-OpenCV_logo_black_text.svg.png"
      },
      {
        "name": "spaCy",
        "description": "Biblioteca para procesamiento avanzado del lenguaje natural en Python.",
        "url": "https://spacy.io/",
        "imageUrl": "https://spacy.io/assets/img/spacy-logo.svg" // Publicly available image
      },
      {
        "name": "NLTK",
        "description": "Plataforma líder para construir programas Python que trabajan con datos de lenguaje humano.",
        "url": "https://www.nltk.org/",
        "imageUrl": "https://www.nltk.org/_static/nltk.png"
      }
    ]
  };
});
