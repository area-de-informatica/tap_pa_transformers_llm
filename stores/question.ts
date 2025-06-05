import { defineStore } from 'pinia'

export const useStoreQuestion = defineStore('questions', {
  state: () => ({
    questions: [], n
    currentQuestion: null, 
  }),

  actions: {
    
    async fetchQuestions() {
      try {
        
        const response = await $fetch('/api/questions', { method: 'GET' })
        this.questions = response 
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    },

   
    setCurrentQuestion(question) {
      this.currentQuestion = { ...question } 
    },

    
    updateQuestion(updatedQuestion) {
      const index = this.questions.findIndex(q => q.pregunta === updatedQuestion.pregunta) 
      if (index !== -1) {
       
        this.questions[index] = { ...updatedQuestion }
        
        
        if (this.currentQuestion && this.currentQuestion.pregunta === updatedQuestion.pregunta) {
          this.currentQuestion = { ...updatedQuestion }
        }
      }
    },
  },
})
