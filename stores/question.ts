import { defineStore } from 'pinia';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const useStoreQuestion = defineStore('question', {
  state: () => ({
    questions: [] as Question[],
    userAnswers: [] as (number | null)[],
    currentIndex: 0,
    isCompleted: false,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    currentQuestion: (state) => state.questions[state.currentIndex] || null,
    totalQuestions: (state) => state.questions.length,
    correctAnswers: (state) =>
      state.userAnswers.filter((answer, index) => answer === state.questions[index]?.correctAnswer).length,
  },

  actions: {
    async fetchQuestions(module?: string) {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch('/api/question' + (module ? `?module=${module}` : ''), {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Error en la respuesta de la API');

        const data = await response.json();
        if (data && data.preguntas && Array.isArray(data.preguntas)) {
          this.questions = data.preguntas;
          this.userAnswers = new Array(this.questions.length).fill(null);
        } else {
          throw new Error('Formato de respuesta inválido de la API');
        }
      } catch (error) {
        this.error = 'No se pudieron cargar las preguntas desde la API. Usando preguntas de respaldo.';
        console.error('Error fetching questions:', error);

        this.questions = [
          { id: 1, text: '¿Qué es un LLM?', options: ['Large Language Model', 'Linguistic Learning Module', 'Light Learning Machine'], correctAnswer: 0 },
          { id: 2, text: '¿Cuál es un modelo de LLM popular?', options: ['Grok', 'Calculator', 'Clock'], correctAnswer: 0 },
          { id: 3, text: '¿Qué tecnología subyace en muchos LLMs modernos?', options: ['Transformers', 'Transistors', 'Translators'], correctAnswer: 0 },
          { id: 4, text: '¿Qué usa un LLM para aprender?', options: ['Datos', 'Dibujos', 'Canciones'], correctAnswer: 0 },
          { id: 5, text: '¿Para qué se puede usar un LLM en aplicaciones reales?', options: ['Chatbots', 'Cocinar', 'Conducir'], correctAnswer: 0 },
          { id: 6, text: '¿Qué compañía desarrolló Grok?', options: ['xAI', 'Google', 'Microsoft'], correctAnswer: 0 },
          { id: 7, text: '¿Qué modo especial tiene Grok para pensar antes de responder?', options: ['Think Mode', 'Fast Mode', 'Silent Mode'], correctAnswer: 0 },
        ];
        this.userAnswers = new Array(this.questions.length).fill(null);
      } finally {
        this.loading = false;
      }
    },

    submitAnswer(answer: number) {
      if (this.currentIndex < this.questions.length) {
        this.userAnswers[this.currentIndex] = answer;
      }
    },

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      }
    },

    completeExam() {
      this.isCompleted = true;
    },

    resetExam() {
      this.currentIndex = 0;
      this.userAnswers = new Array(this.questions.length).fill(null);
      this.isCompleted = false;
    },
  },
});