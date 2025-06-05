export default defineEventHandler((event) => {
    const Introducción = [
      {
        modulo: "Introducción",
        titulo: "LLMs, PLN y Transformers",
        tipo: "contenido",
        estilo: {
          envoltorio: "content-wrapping",
          componentes: ["v-card", "v-chip"]
        },
        secciones: [
          {
            subtitulo: "LLMs",
            texto: "Los modelos de lenguaje de gran tamaño (LLM) son redes neuronales entrenadas con grandes volúmenes de datos textuales. Su objetivo es aprender la estructura del lenguaje para realizar tareas como traducción automática, generación de texto y comprensión semántica. Estos modelos han sido clave en el avance del Procesamiento del Lenguaje Natural (PLN).",
            imagen: "https://inesdi-cdn.s3.eu-west-3.amazonaws.com/inesdi-prod/2024-02/LLM.jpeg"
          },
          {
            subtitulo: "Transformers",
            texto: "Los Transformers son arquitecturas de red neuronal fundamentales para los LLMs. Están diseñadas para procesar secuencias completas en paralelo, utilizando mecanismos de atención que permiten identificar qué partes del texto son más relevantes. Su estructura de capas incluye codificadores y decodificadores que trabajan juntos para tareas complejas como la generación de lenguaje.",
            imagen: "https://deeprevision.github.io/posts/001-transformer/transformer.png"
          }
        ],
        chips: ["LLMs", "PLN", "Transformers"],
        referencias: [
          "https://droids.es/divulgacion/large-language-models/",
          "https://aws.amazon.com/es/what-is/transformers-in-artificial-intelligence/",
          "https://theblackboxlab.com/transformers/"
        ],
        credito: "DEPARTAMENTO DE INFORMÁTICA EDUCATIVA - TÉCNICAS AVANZADAS DE PROGRAMACIÓN"
      }
    ];
  
    return Introducción;
  });
  