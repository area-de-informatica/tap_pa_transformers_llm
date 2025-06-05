export default defineEventHandler(() => {
    return {
      secciones: [
        {
          title: '¿Qué son los modelos de lenguaje de gran tamaño?',
          content: 'Los LLM (Large Language Models) son modelos de aprendizaje profundo basados en arquitecturas de transformers que permiten comprender y generar texto con alta coherencia mediante mecanismos de autoatención paralela.',
          color: '',
          dark: false
        },
        {
          title: 'Importancia de los LLM',
          content: 'Son fundamentales para múltiples tareas como traducción automática, resumen de texto, generación de contenido, asistentes virtuales, entre otras aplicaciones que requieren comprensión avanzada del lenguaje.',
          color: 'primary',
          dark: true
        },
        {
          title: 'Aplicaciones comunes',
          content: 'Algunas aplicaciones incluyen generación automática de texto, clasificación de documentos, chatbots inteligentes, análisis de sentimiento, y programación asistida.',
          color: '',
          dark: false
        },
        {
          title: 'Ventajas principales',
          content: 'Capacidad multilingüe, adaptabilidad a diferentes industrias, y mejora continua mediante técnicas de fine-tuning o entrenamiento adicional.',
          color: 'secondary',
          dark: true
        },
        {
          title: 'Basado en:',
          content: 'Documentación AWS, papers académicos, y recursos oficiales de frameworks de machine learning.',
          color: 'grey darken-3',
          dark: true
        }
      ]
    }
  })
  