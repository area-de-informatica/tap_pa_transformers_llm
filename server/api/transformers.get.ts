// File: /server/api/transformers.ts

export default defineEventHandler((event) => {
  const transformers = [
    {
      modulo: "Transformers en Inteligencia Artificial",
      video: "https://youtu.be/MR7Dkyc7WSM?si=4g6qqmWw63Ap1O4W", // puedes reemplazar con un video más específico si tienes uno
      secciones: [
        {
          subtitulo: "¿Qué es un modelo de transformador?",
          contenido:
            "Los modelos transformadores, introducidos en 2017, son una clase de modelos de deep learning esenciales en el procesamiento del lenguaje natural y otras áreas de la IA. Su diseño fue presentado por Ashish Vaswani en el artículo 'Attention is All You Need'. Los transformadores usan un mecanismo de autoatención que permite enfocarse en la información más relevante dentro de una secuencia, mejorando precisión y eficiencia.",
          imagen:
            "https://delatorre.ai/wp-content/uploads/2024/09/Captura-de-pantalla-2024-09-17-120633-1024x576.png",
        },
        {
          subtitulo: "1. Embeddings y Codificación Posicional",
          contenido:
            "Cada palabra se convierte en un vector llamado *embedding*, que representa su significado. A esto se le suma una codificación posicional, ya que los transformers no procesan secuencias en orden como las RNN.",
        },
        {
          subtitulo: "2. Mecanismo de Self-Attention",
          contenido:
            "El modelo analiza todas las palabras simultáneamente para determinar cuánto debe 'atender' cada palabra a las otras. Se utilizan tres vectores: Query (Q), Key (K) y Value (V). Esto permite relaciones como en 'El gato se comió el pescado porque tenía hambre', donde 'tenía' se relaciona con 'el gato'.",
        },
        {
          subtitulo: "3. Cálculo de la Atención",
          contenido:
            "Se calculan los pesos de atención mediante operaciones entre Q y K, que luego se aplican a V para obtener nuevas representaciones del texto.",
        },
        {
          subtitulo: "4. Capas Feedforward y Normalización",
          contenido:
            "Después de la atención, los datos pasan por redes densas y se aplican técnicas como conexiones residuales y normalización de capa para estabilizar el aprendizaje.",
        },
        {
          subtitulo: "5. Apilamiento de Capas",
          contenido:
            "Los transformers tienen múltiples capas que repiten el proceso de atención y feedforward para capturar patrones más complejos.",
        },
        {
          subtitulo: "6. El Decodificador",
          contenido:
            "En tareas de generación como traducción o chat, se usa un decodificador que genera texto palabra por palabra usando la atención sobre la entrada y el contexto previo.",
        },
      ],
    },
  ];

  return transformers;
});
