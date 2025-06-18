<template>
  <div class="llm-dreamcore-bg">
    <!-- Background simplificado -->
    <div class="bg-magic">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="dream-grid"></div>
    </div>

    <v-container class="content-wrapper pa-8">
      <!-- Header -->
      <v-row>
        <v-col cols="12" class="text-center mb-6">
          <h1 class="text-h3 font-weight-black gradient-title mb-4">
            🤖 Modelos de Lenguaje de Gran Tamaño 🤖
          </h1>
          <p class="text-h6 subtitle-magic">
            ✨ Explorando el Futuro de la Inteligencia Artificial ✨
          </p>
        </v-col>
      </v-row>

      <!-- Secciones -->
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(section, index) in enhancedSections"
          :key="index"
        >
          <v-card
            class="section-card magical-card h-100"
            :class="{ 'expanded': expandedCards.includes(index) }"
            elevation="6"
          >
            <div class="card-header" :style="{ background: section.gradient }">
              <div class="d-flex align-center pa-4">
                <v-icon size="32" color="white" class="mr-3">{{ section.icon }}</v-icon>
                <div>
                  <h3 class="text-h6 font-weight-bold text-white">{{ section.title }}</h3>
                  <v-chip size="small" color="white" text-color="primary">
                    {{ section.category }}
                  </v-chip>
                </div>
              </div>
            </div>

            <v-card-text class="pa-4">
              <p class="text-body-1 mb-3">{{ section.content }}</p>

              <v-expand-transition>
                <div v-if="expandedCards.includes(index)" class="expanded-content">
                  <div class="key-points mb-4">
                    <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">
                      🎯 Puntos Clave:
                    </h4>
                    <v-list density="compact">
                      <v-list-item
                        v-for="point in section.keyPoints"
                        :key="point"
                        class="px-0"
                      >
                        <template v-slot:prepend>
                          <v-icon size="small" color="success">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>

                  <div class="applications mb-4">
                    <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">
                      🚀 Aplicaciones:
                    </h4>
                    <div class="d-flex flex-wrap gap-2">
                      <v-chip
                        v-for="app in section.applications"
                        :key="app"
                        size="small"
                        :color="section.chipColor"
                        variant="elevated"
                      >
                        {{ app }}
                      </v-chip>
                    </div>
                  </div>

                  <div class="example-section">
                    <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">
                      💡 Ejemplo Práctico:
                    </h4>
                    <v-alert type="info" variant="tonal" density="compact">
                      {{ section.example }}
                    </v-alert>
                  </div>
                </div>
              </v-expand-transition>
            </v-card-text>

            <v-card-actions class="pa-4">
              <v-btn
                class="magical-button flex-grow-1"
                variant="elevated"
                :prepend-icon="expandedCards.includes(index) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="toggleExpand(index)"
              >
                {{ expandedCards.includes(index) ? 'Contraer' : 'Ver Más' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLlmsStore } from '@/stores/llms'

const llmsStore = useLlmsStore()
const expandedCards = ref([])

const enhancedSections = computed(() => {
  const baseData = [
    {
      icon: 'mdi-brain',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Fundamentos',
      chipColor: 'purple',
      keyPoints: [
        'Comprensión del procesamiento de lenguaje natural',
        'Arquitecturas de redes neuronales avanzadas',
        'Mecanismos de atención y transformers'
      ],
      applications: ['Chatbots', 'Asistentes Virtuales', 'Educación'],
      example: 'ChatGPT utiliza arquitectura transformer para generar respuestas coherentes basadas en el contexto de la conversación.'
    },
    {
      icon: 'mdi-chip',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'Arquitectura',
      chipColor: 'pink',
      keyPoints: [
        'Entrenamiento con grandes volúmenes de datos',
        'Optimización de parámetros y hiperparámetros',
        'Técnicas de fine-tuning especializado'
      ],
      applications: ['Investigación', 'Análisis de Datos', 'Ciencia'],
      example: 'BERT utiliza bidireccionalidad para entender mejor el contexto de las palabras en una oración.'
    },
    {
      icon: 'mdi-rocket',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: 'Aplicaciones',
      chipColor: 'blue',
      keyPoints: [
        'Generación de texto coherente y contextual',
        'Traducción automática de alta calidad',
        'Análisis de sentimientos y emociones'
      ],
      applications: ['Marketing', 'Contenido', 'Creatividad'],
      example: 'DeepL utiliza LLMs para proporcionar traducciones más naturales y precisas que los métodos tradicionales.'
    }
  ]
  
  return llmsStore.secciones.map((section, index) => ({
    ...section,
    ...baseData[index % baseData.length]
  }))
})

const toggleExpand = (index) => {
  const cardIndex = expandedCards.value.indexOf(index)
  if (cardIndex > -1) {
    expandedCards.value.splice(cardIndex, 1)
  } else {
    expandedCards.value.push(index)
  }
}

onMounted(() => {
  llmsStore.fetchLlms()
})
</script>

<style scoped>
/* Background simplificado */
.llm-dreamcore-bg {
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

/* Cards */
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

.card-header {
  position: relative;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

/* Contenido expandido */
.expanded-content {
  border-top: 1px solid rgba(103, 58, 183, 0.1);
  padding-top: 16px;
  margin-top: 16px;
}

.key-points {
  background: linear-gradient(135deg, rgba(240, 248, 255, 0.8), rgba(255, 250, 240, 0.8));
  border-radius: 12px;
  padding: 12px;
  border-left: 4px solid #667eea;
}

.applications {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  padding: 12px;
  border-left: 4px solid #f093fb;
}

.example-section {
  margin-top: 12px;
}

/* Botón */
.magical-button {
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  color: white !important;
  font-weight: bold;
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.magical-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(103, 58, 183, 0.4);
}

/* Responsive */
@media (max-width: 960px) {
  .bubble { display: none; }
  .dream-grid { background-size: 30px 30px; }
}

@media (max-width: 600px) {
  .content-wrapper { padding: 16px 8px; }
  .gradient-title { font-size: 2rem !important; }
}
</style>