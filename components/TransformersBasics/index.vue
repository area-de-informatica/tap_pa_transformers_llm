<template>
  <div class="transformers-dreamcore-bg">
    <!-- Background simplificado -->
    <div class="bg-magic">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="dream-grid"></div>
    </div>

    <v-container class="content-wrapper pa-6">
      <!-- Header -->
      <v-card class="header-card dreamcore-card mb-6" elevation="8">
        <v-card-text class="pa-6 text-center">
          <div class="d-flex align-center justify-center mb-4">
            <v-icon size="48" color="primary" class="pulse-icon mr-4">mdi-network</v-icon>
            <div>
              <h1 class="text-h3 font-weight-black gradient-title">
                🧠 TRANSFORMERS EN IA 🧠
              </h1>
              <p class="text-h6 subtitle-magic">
                ✨ La Revolución de la Arquitectura Neural ✨
              </p>
            </div>
          </div>
          <p class="text-body-1 academic-text">
            Los Transformers han revolucionado la IA desde 2017, siendo la base de 
            modelos como GPT, BERT y ChatGPT gracias a su mecanismo de atención.
          </p>
        </v-card-text>
      </v-card>

      <!-- Secciones principales -->
      <div v-if="transformers.length">
        <v-row>
          <v-col
            v-for="(seccion, index) in enhancedSections"
            :key="index"
            cols="12"
            md="6"
            class="mb-4"
          >
            <v-card
              class="section-card magical-card h-100"
              :class="{ 'expanded': expandedSections.includes(index) }"
              elevation="6"
            >
              <!-- Header -->
              <div class="section-header" :style="{ background: seccion.gradient }">
                <div class="d-flex align-center pa-4">
                  <v-icon size="28" color="white" class="mr-3">{{ seccion.icon }}</v-icon>
                  <h3 class="text-h6 font-weight-bold text-white">{{ seccion.subtitulo }}</h3>
                </div>
              </div>

              <!-- Contenido -->
              <v-card-text class="pa-4">
                <p class="text-body-2 mb-3">{{ seccion.contenido }}</p>
                
                <!-- Imagen si existe -->
                <v-img
                  v-if="seccion.imagen"
                  :src="seccion.imagen"
                  height="200px"
                  cover
                  rounded="lg"
                  class="mb-3"
                />

                <!-- Contenido expandido -->
                <v-expand-transition>
                  <div v-if="expandedSections.includes(index)" class="expanded-content">
                    <!-- Conceptos clave -->
                    <div class="key-concepts mb-3">
                      <h4 class="text-subtitle-2 font-weight-bold mb-2 gradient-text">
                        🎯 Conceptos Clave:
                      </h4>
                      <v-list density="compact">
                        <v-list-item
                          v-for="concept in seccion.concepts"
                          :key="concept"
                          class="px-0"
                        >
                          <template v-slot:prepend>
                            <v-icon size="small" color="primary">mdi-lightbulb</v-icon>
                          </template>
                          <v-list-item-title class="text-body-2">{{ concept }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </div>

                    <!-- Aplicaciones -->
                    <div class="applications">
                      <h4 class="text-subtitle-2 font-weight-bold mb-2 gradient-text">
                        🚀 Aplicaciones:
                      </h4>
                      <div class="d-flex flex-wrap gap-1">
                        <v-chip
                          v-for="app in seccion.applications"
                          :key="app"
                          size="small"
                          color="info"
                          variant="tonal"
                        >
                          {{ app }}
                        </v-chip>
                      </div>
                    </div>
                  </div>
                </v-expand-transition>
              </v-card-text>

              <!-- Botón expandir -->
              <v-card-actions class="pa-4">
                <v-btn
                  class="magical-button flex-grow-1"
                  variant="elevated"
                  :prepend-icon="expandedSections.includes(index) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="toggleExpand(index)"
                >
                  {{ expandedSections.includes(index) ? 'Contraer' : 'Ver Más' }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Arquitectura básica -->
      <v-card class="architecture-card dreamcore-card mt-6" elevation="6">
        <div class="architecture-header">
          <div class="d-flex align-center pa-4">
            <v-icon size="32" color="white" class="mr-3">mdi-sitemap</v-icon>
            <h2 class="text-h5 font-weight-bold text-white">🏗️ Arquitectura Transformer</h2>
          </div>
        </div>
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="12" md="6">
              <div class="arch-component">
                <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">📥 Encoder</h4>
                <v-list density="compact">
                  <v-list-item
                    v-for="layer in encoderLayers"
                    :key="layer.name"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon size="small" :color="layer.color">{{ layer.icon }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">{{ layer.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="arch-component">
                <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">📤 Decoder</h4>
                <v-list density="compact">
                  <v-list-item
                    v-for="layer in decoderLayers"
                    :key="layer.name"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon size="small" :color="layer.color">{{ layer.icon }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">{{ layer.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Timeline compacto -->
      <v-card class="timeline-card dreamcore-card mt-6" elevation="6">
        <div class="timeline-header">
          <div class="d-flex align-center pa-4">
            <v-icon size="32" color="white" class="mr-3">mdi-timeline</v-icon>
            <h2 class="text-h5 font-weight-bold text-white">📅 Evolución Clave</h2>
          </div>
        </div>
        <v-card-text class="pa-4">
          <v-row>
            <v-col
              v-for="event in timeline"
              :key="event.year"
              cols="12"
              sm="6"
              md="3"
            >
              <div class="timeline-item">
                <div class="timeline-year">{{ event.year }}</div>
                <h4 class="text-subtitle-2 font-weight-bold mb-1">{{ event.title }}</h4>
                <p class="text-caption">{{ event.description }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStoreTransformers } from '@/stores/transformers'

const storeTransformers = useStoreTransformers()
const expandedSections = ref([])

const transformers = computed(() => storeTransformers.transformers)

// Secciones mejoradas (solo las esenciales)
const enhancedSections = computed(() => {
  if (!transformers.value.length) return []
  
  const baseSections = transformers.value[0].secciones
  const enhancements = [
    {
      icon: 'mdi-brain',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      concepts: [
        'Self-Attention: El modelo se enfoca en partes relevantes del texto',
        'Multi-Head Attention: Múltiples mecanismos de atención en paralelo',
        'Positional Encoding: Información sobre la posición de las palabras'
      ],
      applications: ['ChatGPT', 'Traducción', 'Resúmenes']
    },
    {
      icon: 'mdi-network',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      concepts: [
        'Encoder-Decoder: Arquitectura de codificación y decodificación',
        'Residual Connections: Conexiones que mejoran el flujo de información',
        'Layer Normalization: Estabiliza el entrenamiento'
      ],
      applications: ['BERT', 'GPT', 'T5']
    },
    {
      icon: 'mdi-lightning-bolt',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      concepts: [
        'Paralelización: Procesamiento simultáneo vs secuencial',
        'Escalabilidad: Funciona bien con modelos muy grandes',
        'Transfer Learning: Reutilización de conocimiento pre-entrenado'
      ],
      applications: ['Fine-tuning', 'Few-shot Learning', 'Zero-shot Learning']
    }
  ]
  
  return baseSections.slice(0, 3).map((section, index) => ({
    ...section,
    ...enhancements[index]
  }))
})

// Capas simplificadas
const encoderLayers = ref([
  { name: 'Input Embeddings', icon: 'mdi-vector-square', color: 'blue' },
  { name: 'Multi-Head Attention', icon: 'mdi-eye-multiple', color: 'purple' },
  { name: 'Feed Forward', icon: 'mdi-arrow-right', color: 'green' }
])

const decoderLayers = ref([
  { name: 'Output Embeddings', icon: 'mdi-vector-square-outline', color: 'blue' },
  { name: 'Masked Attention', icon: 'mdi-eye-off', color: 'red' },
  { name: 'Cross Attention', icon: 'mdi-eye-multiple-outline', color: 'purple' },
  { name: 'Linear + Softmax', icon: 'mdi-function', color: 'orange' }
])

// Timeline compacto
const timeline = ref([
  { year: '2017', title: 'Transformer', description: 'Arquitectura original' },
  { year: '2018', title: 'BERT', description: 'Encoder bidireccional' },
  { year: '2019', title: 'GPT-2', description: 'Generación de texto' },
  { year: '2022', title: 'ChatGPT', description: 'IA conversacional' }
])

const toggleExpand = (index) => {
  const sectionIndex = expandedSections.value.indexOf(index)
  if (sectionIndex > -1) {
    expandedSections.value.splice(sectionIndex, 1)
  } else {
    expandedSections.value.push(index)
  }
}

onMounted(() => {
  storeTransformers.fetchTransformers()
})
</script>

<style scoped>
/* Background simplificado */
.transformers-dreamcore-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffeef8 0%, #e8f4fd 50%, #f0f8ff 100%);
  position: relative;
  overflow: hidden;
}

.bg-magic {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  animation: bubbleFloat 15s infinite ease-in-out;
}

.bubble-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 10%;
  background: radial-gradient(circle, rgba(103, 58, 183, 0.2), rgba(103, 58, 183, 0.05));
}

.bubble-2 {
  width: 100px;
  height: 100px;
  top: 70%;
  right: 15%;
  background: radial-gradient(circle, rgba(233, 30, 99, 0.2), rgba(233, 30, 99, 0.05));
  animation-delay: -5s;
}

.bubble-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 60%;
  background: radial-gradient(circle, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.05));
  animation-delay: -10s;
}

@keyframes bubbleFloat {
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
  50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
}

.dream-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(103, 58, 183, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 58, 183, 0.06) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 25s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Content */
.content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.dreamcore-card {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(103, 58, 183, 0.15);
}

.gradient-title {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: titleShimmer 3s ease-in-out infinite;
}

@keyframes titleShimmer {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}

.subtitle-magic {
  color: #64748b;
  font-weight: 500;
}

.pulse-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.academic-text {
  color: #475569;
  line-height: 1.6;
}

/* Section Cards */
.section-card {
  transition: all 0.4s ease;
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  overflow: hidden;
}

.magical-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(103, 58, 183, 0.3);
}

.expanded {
  transform: scale(1.02) !important;
  box-shadow: 0 15px 50px rgba(103, 58, 183, 0.2) !important;
}

.section-header {
  position: relative;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

.expanded-content {
  border-top: 1px solid rgba(103, 58, 183, 0.1);
  padding-top: 12px;
  margin-top: 12px;
}

.key-concepts {
  background: rgba(240, 248, 255, 0.8);
  border-radius: 8px;
  padding: 12px;
  border-left: 3px solid #667eea;
}

.applications {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 8px;
  padding: 12px;
  border-left: 3px solid #f093fb;
  margin-top: 12px;
}

/* Architecture */
.architecture-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.arch-component {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  padding: 16px;
  height: 100%;
}

/* Timeline */
.timeline-header {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.timeline-item {
  text-align: center;
  padding: 16px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateY(-4px);
  box-shadow:}
  </style >