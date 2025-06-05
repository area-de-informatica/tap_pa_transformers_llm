import { defineStore } from 'pinia'
import { $fetch } from 'ofetch'

export const useStorePLN = defineStore('PLN', {
  state: () => ({
    modulo: null, // objeto principal
    secciones: [],
    preguntas: [],
  }),
  actions: {
    async fetchPLNData() {
      try {
        const data = await $fetch('/api/PLN')
        this.modulo = data
        this.secciones = data.secciones || []
        this.preguntas = data.preguntas || []
      } catch (error) {
        console.error('Error cargando datos PLN:', error)
      }
    }
  }
})
