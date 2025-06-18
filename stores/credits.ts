import { defineStore } from 'pinia'

export const useCreditsStore = defineStore('credits', {
  state: () => ({
    projectInfo: {
      title: 'Plataforma de Aprendizaje LLMs',
      version: '1.0.0',
      description: 'Sistema educativo interactivo para el aprendizaje de Modelos de Lenguaje de Gran Tamaño',
      startDate: '2024-01-15',
      lastUpdate: new Date().toISOString().split('T')[0]
    },
    team: [],
    technologies: [],
    acknowledgments: [],
    loading: false,
    error: null
  }),

  getters: {
    totalTeamMembers: (state) => state.team.length,
    totalTechnologies: (state) => state.technologies.length,
    projectDuration: (state) => {
      const start = new Date(state.projectInfo.startDate)
      const now = new Date()
      const diffTime = Math.abs(now - start)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
  },

  actions: {
    async fetchCreditsData() {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch('/api/credits')
        if (!response.ok) {
          throw new Error('Error al cargar los créditos')
        }
        
        const data = await response.json()
        
        this.team = data.team || []
        this.technologies = data.technologies || []
        this.acknowledgments = data.acknowledgments || []
        
      } catch (error) {
        this.error = error.message
        console.error('Error fetching credits:', error)
      } finally {
        this.loading = false
      }
    },

    async addTeamMember(member) {
      try {
        const response = await fetch('/api/credits/team', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(member)
        })
        
        if (response.ok) {
          const newMember = await response.json()
          this.team.push(newMember)
        }
      } catch (error) {
        console.error('Error adding team member:', error)
      }
    }
  }
})