<!-- pages/transformers.vue -->
<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Transformers en Inteligencia Artificial</h1>

    <div v-if="transformers.length">
      <div
        v-for="(seccion, index) in transformers[0].secciones"
        :key="index"
        class="mb-6 p-4 border rounded shadow-sm"
      >
        <h2 class="text-xl font-semibold mb-2">{{ seccion.subtitulo }}</h2>
        <p class="mb-2">{{ seccion.contenido }}</p>
        <img
          v-if="seccion.imagen"
          :src="seccion.imagen"
          alt="Imagen relacionada"
          class="w-full rounded"
        />
      </div>
    </div>
    <div v-else>
      <p>Cargando contenido...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStoreTransformers } from'@/stores/transformers'

const storeTransformers = useStoreTransformers()

const transformers = computed(() => storeTransformers.transformers)

onMounted(() => {
  storeTransformers.fetchTransformers()
})
</script>

