import { defineStore } from 'pinia'

export const useStoreContenido = defineStore('contenidos', {
  state: () => ({
    contenidos: [],            // Lista de todos los contenidos (módulos)
    currentContenido: null     // Contenido actual seleccionado
  }),

  actions: {
    async fetchContenidos() {
      try {
        const response = await $fetch('/api/contenido', { method: 'GET' })
        this.contenidos = response
      } catch (error) {
        console.error('Error al obtener contenidos:', error)
      }
    },

    setCurrentContenido(contenido) {
      this.currentContenido = { ...contenido }
    },

    updateContenido(updatedContenido) {
      const index = this.contenidos.findIndex(c => c.modulo === updatedContenido.modulo)
      if (index !== -1) {
        this.contenidos[index] = { ...updatedContenido }

        if (this.currentContenido && this.currentContenido.modulo === updatedContenido.modulo) {
          this.currentContenido = { ...updatedContenido }
        }
      }
    }
  }
})
