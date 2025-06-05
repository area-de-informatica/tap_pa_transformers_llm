<template>
  <v-container class="pa-6">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4" elevation="2">
          <h2 class="text-center text-h5 font-weight-bold mb-6">INTRODUCCIÓN A LLMS</h2>

          <div v-if="secciones.length">
            <v-card
              v-for="(section, index) in secciones"
              :key="index"
              class="mb-4 pa-3"
              elevation="1"
            >
              <h3 class="text-subtitle-1 font-weight-bold">{{ section.subtitulo }}</h3>
              <p>{{ section.contenido }}</p>
              <v-img
                v-if="section.imagen"
                :src="section.imagen"
                aspect-ratio="16/9"
                class="my-3"
                cover
                rounded
              />
            </v-card>
          </div>

          <div v-if="preguntas.length">
            <h3 class="text-h6 font-weight-bold mt-6 mb-4">Evaluación</h3>
            <v-card
              v-for="(q, index) in preguntas"
              :key="index"
              class="mb-3 pa-3"
              elevation="1"
            >
              <p class="font-weight-medium">{{ q.question }}</p>
              <v-list dense>
                <v-list-item
                  v-for="(answer, i) in q.answers"
                  :key="i"
                  class="px-0"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ Object.values(answer)[0] }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStorePLN } from '@/stores/PLN'

const storePLN = useStorePLN()

const secciones = computed(() => storePLN.secciones)
const preguntas = computed(() => storePLN.preguntas)

onMounted(() => {
  storePLN.fetchPLNData()
})
</script>
