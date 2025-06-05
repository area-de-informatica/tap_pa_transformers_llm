import { defineStore } from 'pinia'

export const useLlmsStore = defineStore('llms', {
  state: () => ({
    secciones: []
  }),
  actions: {
    async fetchLlms() {
      const data = await fetch('/api/llms').then(res => res.json())
      this.secciones = data.secciones
    }
  }
})
