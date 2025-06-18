import { defineStore } from 'pinia'

export const useStoreIa = defineStore('storeIa', {
  state: () => ({
    llmExamples: [
      {
        name: "ChatGPT",
        description: "Asistente conversacional avanzado para múltiples tareas de procesamiento de lenguaje natural.",
        imageUrl: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=300&h=200&fit=crop&crop=center",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        description: "IA conversacional enfocada en ser útil, inofensiva y honesta para diversas aplicaciones.",
        imageUrl: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=300&h=200&fit=crop&crop=center",
        url: "https://claude.ai"
      },
      {
        name: "Gemini",
        description: "Modelo multimodal de Google para texto, código, imágenes y más aplicaciones.",
        imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=200&fit=crop&crop=center",
        url: "https://gemini.google.com"
      },
      {
        name: "Copilot",
        description: "Asistente de IA de Microsoft integrado en aplicaciones de productividad y desarrollo.",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&crop=center",
        url: "https://copilot.microsoft.com"
      },
      {
        name: "Perplexity",
        description: "Motor de búsqueda potenciado por IA que proporciona respuestas precisas con fuentes.",
        imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop&crop=center",
        url: "https://perplexity.ai"
      },
      {
        name: "Midjourney",
        description: "Generador de imágenes por IA que crea arte digital a partir de descripciones de texto.",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center",
        url: "https://midjourney.com"
      },
      {
        name: "DALL-E",
        description: "Modelo de OpenAI para generar imágenes realistas a partir de descripciones en lenguaje natural.",
        imageUrl: "https://images.unsplash.com/photo-1686191128892-c9c7bb2d4d8a?w=300&h=200&fit=crop&crop=center",
        url: "https://openai.com/dall-e-3"
      },
      {
        name: "Stable Diffusion",
        description: "Modelo de difusión latente para generación de imágenes de alta calidad y código abierto.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=300&h=200&fit=crop&crop=center",
        url: "https://stability.ai/stable-diffusion"
      },
      {
        name: "GitHub Copilot",
        description: "Asistente de programación que sugiere código y funciones completas en tiempo real.",
        imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=300&h=200&fit=crop&crop=center",
        url: "https://github.com/features/copilot"
      }
    ],
    questions: [
      { pregunta: "¿Cuáles son las principales arquitecturas de los LLMs modernos?" },
      { pregunta: "¿Cómo funcionan los mecanismos de atención en los transformers?" },
      { pregunta: "¿Qué técnicas se utilizan para el fine-tuning de modelos?" },
      { pregunta: "¿Cuáles son los principales desafíos éticos de los LLMs?" }
    ]
  }),
  
  actions: {
    fetchQuestions() {
      // Tu lógica existente para cargar preguntas
      console.log('Preguntas cargadas')
    }
  }
})