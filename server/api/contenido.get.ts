export default defineEventHandler((event) => {
    const contenidos = [
      {
        modulo: "Introducción",
        secciones: [
          {
            titulo: "LLMs",
            tipo: "content-wrapping",
            estilo: "v-card",
            descripcion: "Los modelos de lenguaje de gran tamaño (LLM) son redes neuronales entrenadas con una gran cantidad de datos para aprender y reproducir la estructura del lenguaje. Se aplican en tareas como PLN, traducción automática y generación de textos.",
            imagen: "https://inesdi-cdn.s3.eu-west-3.amazonaws.com/inesdi-prod/2024-02/LLM.jpeg"
          },
          {
            titulo: "Transformers",
            tipo: "content-wrapping",
            estilo: "v-card",
            descripcion: "Los Transformers son arquitecturas de red neuronal con capas de encoders y decoders, mecanismos de atención de múltiples cabezas y redes feedforward. Transforman secuencias de entrada en salida.",
            chips: ["LLMs", "PLN", "Transformers"],
            imagen: "https://deeprevision.github.io/posts/001-transformer/transformer.png"
          }
        ],
        referencias: [
          "https://droids.es/divulgacion/large-language-models/",
          "https://aws.amazon.com/es/what-is/transformers-in-artificial-intelligence/",
          "https://theblackboxlab.com/transformers/"
        ]
      },
      {
        modulo: "LLMs",
        video: "https://www.youtube.com/watch?v=oYwqNWRxLA4&ab_channel=Tecnolog%C3%ADa4.0",
        secciones: [
          {
            subtitulo: "¿Qué son los modelos de lenguaje de gran tamaño?",
            contenido: "Los LLM utilizan arquitecturas transformer para captar relaciones entre palabras. Se diferencian de las RNN al procesar en paralelo."
          },
          {
            subtitulo: "¿Por qué son importantes?",
            contenido: "Pueden responder preguntas, resumir, traducir y completar textos. Mejoran la interacción hombre-máquina."
          },
          {
            subtitulo: "Aplicaciones",
            contenido: "Se usan para generar texto, resumir, responder preguntas, programar, analizar sentimientos, etc."
          },
          {
            subtitulo: "Entrenamiento",
            contenido: "Se entrenan con grandes volúmenes de texto mediante predicción de fragmentos. Se ajustan con fine-tuning.",
            imagen: "https://simons.berkeley.edu/sites/default/files/styles/workshop_banner_sm_1x/public/2024-07/LLM%20SPRING_edited%20for%20webpage.png.jpg?itok=f6k6E8Zz"
          }
        ],
        referencias: [
          "https://aws.amazon.com/what-is/large-language-model/?utm_source"
        ]
      },
      {
        modulo: "PLN",
        video: "https://youtu.be/MR7Dkyc7WSM?si=4g6qqmWw63Ap1O4W",
        secciones: [
          {
            subtitulo: "¿Qué es el PLN?",
            contenido: "Permite a computadoras reconocer, comprender y generar texto y voz, usando reglas lingüísticas, aprendizaje automático y profundo."
          },
          {
            subtitulo: "Enfoques del PLN",
            contenido: "Incluye PLN supervisado, no supervisado, comprensión (NLU) y generación de lenguaje (NLG).",
            imagen: "https://www.defteam.com/Sass/images/dt_nlp.png"
          },
          {
            subtitulo: "¿Cómo opera el PLN?",
            contenido: "Procesamiento de texto (tokenización, lematización), análisis sintáctico y semántico."
          }
        ]
      },
      {
        modulo: "Transformers",
        video: "https://youtu.be/o-pf_pdbDgo?si=qbq33LTHrwGlJJ3Q",
        secciones: [
          {
            subtitulo: "¿Qué es un Transformer?",
            contenido: "Modelo de deep learning con mecanismo de atención. Capta relaciones contextuales en el lenguaje."
          },
          {
            subtitulo: "Procesos principales",
            contenido: "1. Embeddings y codificación posicional\n2. Atención (QKV)\n3. Feedforward y normalización\n4. Apilamiento de capas\n5. Decodificador en tareas generativas.",
            imagen: "https://delatorre.ai/wp-content/uploads/2024/09/Captura-de-pantalla-2024-09-17-120633-1024x576.png"
          }
        ]
      }
    ]
  
    return contenidos;
  })
  