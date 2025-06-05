export default defineEventHandler(async (event) => {
  const questions = [
    {
      "Cuestionario": {
        "titulo": "LLMs y Transformers",
        "Parte 1": {
          "tipo": "Opción múltiple",
          "preguntas": [
            {
              "pregunta": "¿Qué significa la sigla LLM?",
              "opciones": [
                "Language Learning Method",
                "Large Language Model",
                "Linguistic Logic Machine",
                "Local Language Memory"
              ]
            },
            {
              "pregunta": "¿Cuál es la arquitectura base de la mayoría de los LLMs modernos?",
              "opciones": [
                "Redes convolucionales",
                "Máquinas de soporte vectorial",
                "Transformers",
                "Árboles de decisión"
              ]
            },
            {
              "pregunta": "¿Qué componente del Transformer permite que el modelo enfoque su atención en partes relevantes del texto?",
              "opciones": [
                "Tokenizador",
                "Red recurrente",
                "Mecanismo de atención",
                "Capa de salida"
              ]
            },
            {
              "pregunta": "¿Qué técnica se usa comúnmente para entrenar LLMs?",
              "opciones": [
                "Supervisión directa",
                "Aprendizaje reforzado",
                "Auto-regresión",
                "Aprendizaje federado"
              ]
            },
            {
              "pregunta": "¿Qué representa el término 'preentrenamiento' en los LLMs?",
              "opciones": [
                "Una técnica de compresión",
                "Entrenamiento en tareas específicas",
                "Entrenamiento general en grandes cantidades de texto",
                "Ajuste fino en pequeños conjuntos de datos"
              ]
            }
          ]
        },
        "Parte 2": {
          "tipo": "Verdadero o falso",
          "preguntas": [
            "Los Transformers procesan tokens secuencialmente, uno por uno.",
            "El 'self-attention' permite a los Transformers comparar cada palabra con todas las demás en una oración.",
            "Los LLMs generan texto siempre con base en reglas gramaticales fijas.",
            "Fine-tuning es el proceso de ajustar un modelo ya entrenado a tareas específicas.",
            "GPT, BERT y T5 son ejemplos de modelos basados en la arquitectura Transformer."
          ]
        },
        "Parte 3": {
          "tipo": "Preguntas abiertas",
          "preguntas": [
            "Explica brevemente cómo funciona el mecanismo de 'self-attention' en los Transformers.",
            "¿Cuál es la diferencia entre preentrenamiento y fine-tuning en un LLM?",
            "¿Para qué se utilizan los embeddings en los modelos de lenguaje?",
            "¿Qué ventajas tienen los Transformers sobre las redes recurrentes (RNNs)?",
            "Menciona al menos tres aplicaciones prácticas de los LLMs en la actualidad."
          ]
        }
      }
    }
  ]

  return questions // 
})
