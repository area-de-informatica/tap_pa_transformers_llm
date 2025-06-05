<template>
  <v-container class="pa-6">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold mb-6">Modelos de Lenguaje de Gran Tamaño</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="(section, index) in secciones"
        :key="index"
      >
        <v-card
          class="pa-4 mb-4"
          :color="section.color"
          :dark="section.dark"
          elevation="4"
          rounded
        >
          <h3 class="text-h6 font-weight-bold mb-2">{{ section.title }}</h3>
          <p>{{ section.content }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLlmsStore } from '@/stores/llms'

const llmsStore = useLlmsStore()

onMounted(() => {
  llmsStore.fetchLlms()
})

const secciones = llmsStore.secciones
</script>
