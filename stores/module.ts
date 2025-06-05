// stores/modules.js o stores/modules.ts si usas TypeScript
import { defineStore } from 'pinia'

export const useStoremodules = defineStore('modules', {
  state: () => ({
    modules: [], // Lista de módulos educativos
    currentModule: null, // Módulo actualmente seleccionado
  }),
  actions: {
    async fetchModules() {
      try {
        const response = await $fetch('/api/modules', { method: 'GET' })
        this.modules = response
      } catch (error) {
        console.error('Error fetching modules:', error)
      }
    },
    setCurrentModule(module) {
      this.currentModule = { ...module } // Clonamos para evitar mutaciones reactivas
    },
    updateModule(updatedModule) {
      // Encontrar el índice del módulo por nombre único (modulo)
      const index = this.modules.findIndex(m => m.modulo === updatedModule.modulo)
      if (index !== -1) {
        this.modules[index] = { ...updatedModule }
        if (this.currentModule && this.currentModule.modulo === updatedModule.modulo) {
          this.currentModule = { ...updatedModule }
        }
      }
    },
  },
})
