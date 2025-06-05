export default defineEventHandler((event) => {
  const PLN = {
    modulo: "PLN",
    video: "https://youtu.be/MR7Dkyc7WSM?si=4g6qqmWw63Ap1O4W",
    secciones: [
      {
        subtitulo: "¿Qué es el PLN?",
        contenido: "Permite a computadoras reconocer, comprender y generar texto y voz, usando reglas lingüísticas, aprendizaje automático y profundo.",
      },
      {
        subtitulo: "Enfoques del PLN",
        contenido: "Incluye PLN supervisado, no supervisado, comprensión (NLU) y generación de lenguaje (NLG).",
        imagen: "https://www.defteam.com/Sass/images/dt_nlp.png",
      },
      {
        subtitulo: "¿Cómo opera el PLN?",
        contenido: "Procesamiento de texto (tokenización, lematización), análisis sintáctico y semántico.",
      },
    ],
    preguntas: [
      {
        id: 1,
        question: "¿Cuál es el objetivo principal de la lematización en PLN?",
        answers: [
          { a: "Convertir palabras a su forma base o raíz" },
          { b: "Eliminar las palabras vacías" },
          { c: "Contar la frecuencia de las palabras" },
        ],
      }
    ]
  };

  return PLN;
});
