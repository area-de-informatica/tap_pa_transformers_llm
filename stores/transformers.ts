

// stores/useStoreTransformers.ts
import { defineStore } from 'pinia'

export const useStoreTransformers = defineStore('transformers', {
  state: () => ({
    transformers: [], // Datos del módulo de Transformers
    currentTransformer: null, // Sección actualmente seleccionada (opcional)
  }),

  actions: {
    // Cargar datos desde la API
    async fetchTransformers() {
      try {
        const response = await $fetch('/api/transformers', { method: 'GET' })
        this.transformers = response
      } catch (error) {
        console.error('Error al obtener los datos de Transformers:', error)
      }
    },

    // Establecer la sección actual (opcional)
    setCurrentTransformer(transformer) {
      this.currentTransformer = { ...transformer }
    },

    // Actualizar una sección específica por índice (si se edita desde el frontend)
    updateTransformer(updatedTransformer) {
      const index = this.transformers.findIndex(t => t.id === updatedTransformer.id)
      if (index !== -1) {
        this.transformers[index] = { ...updatedTransformer }
        if (this.currentTransformer && this.currentTransformer.id === updatedTransformer.id) {
          this.currentTransformer = { ...updatedTransformer }
        }
      }
    },
  },
})

