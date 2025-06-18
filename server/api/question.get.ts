import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const questions = [
    { id: 1, text: '¿Qué es un LLM?', options: ['Large Language Model', 'Linguistic Learning Module', 'Light Learning Machine'], correctAnswer: 0 },
    { id: 2, text: '¿Cuál es un modelo de LLM popular?', options: ['Grok', 'Calculator', 'Clock'], correctAnswer: 0 },
    { id: 3, text: '¿Qué tecnología subyace en muchos LLMs modernos?', options: ['Transformers', 'Transistors', 'Translators'], correctAnswer: 0 },
    { id: 4, text: '¿Qué usa un LLM para aprender?', options: ['Datos', 'Dibujos', 'Canciones'], correctAnswer: 0 },
    { id: 5, text: '¿Para qué se puede usar un LLM en aplicaciones reales?', options: ['Chatbots', 'Cocinar', 'Conducir'], correctAnswer: 0 },
    { id: 6, text: '¿Qué compañía desarrolló Grok?', options: ['xAI', 'Google', 'Microsoft'], correctAnswer: 0 },
    { id: 7, text: '¿Qué modo especial tiene Grok para pensar antes de responder?', options: ['Think Mode', 'Fast Mode', 'Silent Mode'], correctAnswer: 0 },
  ];

  const query = getQuery(event);
  const module = query.module as string | undefined;

  if (module) {
    return questions.filter(q => q.text.toLowerCase().includes(module.toLowerCase()));
  }

  return { preguntas: questions };
});