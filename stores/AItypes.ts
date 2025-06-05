import { defineStore } from 'pinia';

export const useStoreIa = defineStore('questions', {
  state: () => ({
    questions: [], 
    currentQuestion: null, 
    llmExamples: [] 
  }),

  actions: {
    async fetchQuestions() {
      try {
        const response = await $fetch('/api/AItypes', { method: 'GET' });
        
        this.questions = response.questions || [];
        this.llmExamples = response.llmExamples || [];
      } catch (error) {
        console.error('Error fetching AI types data:', error);
      }
    },

    setCurrentQuestion(question) {
      this.currentQuestion = { ...question };
    },

    updateQuestion(updatedQuestion) {
      const index = this.questions.findIndex(q => q.pregunta === updatedQuestion.pregunta);
      if (index !== -1) {
        this.questions[index] = { ...updatedQuestion };
        if (this.currentQuestion && this.currentQuestion.pregunta === updatedQuestion.pregunta) {
          this.currentQuestion = { ...updatedQuestion };
        }
      }
    },
  },
});
