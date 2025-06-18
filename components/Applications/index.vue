<template>
  <div class="apps-dreamcore-bg">
    <!-- Background simplificado -->
    <div class="bg-magic">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="dream-grid"></div>
    </div>

    <v-container class="content-wrapper pa-6">
      <!-- Header modificado para usar texto fijo -->
      <v-card class="header-card dreamcore-card mb-6" elevation="8">
        <v-card-text class="pa-6 text-center">
          <div class="d-flex align-center justify-center mb-4">
            <v-icon size="48" color="primary" class="pulse-icon mr-4">mdi-apps</v-icon>
            <div>
              <h1 class="text-h3 font-weight-black gradient-title">
                🚀 Aplicaciones de LLMs 🚀
              </h1>
              <p class="text-h6 subtitle-magic">
                ✨ Descubre el Poder de la IA ✨
              </p>
            </div>
          </div>
          <p class="text-body-1 academic-text">
            Los LLMs están transformando industrias completas, desde la comunicación 
            hasta la creatividad, ofreciendo soluciones innovadoras para desafíos complejos.
          </p>
        </v-card-text>
      </v-card>

      <!-- Applications Grid modificado -->
      <v-row>
        <v-col
          v-for="(app, index) in applications.slice(0, 6)"
          :key="app.name"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="app-card magical-card h-100"
            :class="`app-${index % 3}`"
            elevation="6"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="handleAppClick(app, index)"
          >
            <!-- Header -->
            <div class="app-header" :style="{ background: app.gradient }">
              <div class="d-flex align-center pa-4">
                <v-icon size="32" color="white" class="mr-3">{{ app.icon }}</v-icon>
                <div>
                  <h3 class="text-h6 font-weight-bold text-white">{{ app.name }}</h3>
                  <v-chip size="small" color="white" text-color="primary">
                    {{ app.category }}
                  </v-chip>
                </div>
              </div>
            </div>

            <!-- Content -->
            <v-card-text class="pa-4">
              <p class="text-body-2 mb-3">{{ app.description }}</p>
              
              <!-- Expandable content -->
              <v-expand-transition>
                <div v-if="expandedApps.includes(index)" class="expanded-content">
                  <!-- Features -->
                  <div class="features-section mb-3">
                    <h4 class="text-subtitle-2 font-weight-bold mb-2 gradient-text">
                      ⚡ Características:
                    </h4>
                    <v-list density="compact">
                      <v-list-item
                        v-for="feature in app.features"
                        :key="feature"
                        class="px-0"
                      >
                        <template v-slot:prepend>
                          <v-icon size="small" color="success">mdi-check</v-icon>
                        </template>
                        <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>

                  <!-- Use cases -->
                  <div class="use-cases">
                    <h4 class="text-subtitle-2 font-weight-bold mb-2 gradient-text">
                      🎯 Casos de Uso:
                    </h4>
                    <div class="d-flex flex-wrap gap-1">
                      <v-chip
                        v-for="useCase in app.useCases"
                        :key="useCase"
                        size="x-small"
                        color="info"
                        variant="tonal"
                      >
                        {{ useCase }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </v-expand-transition>
            </v-card-text>

            <!-- Actions modificadas -->
            <v-card-actions class="pa-4">
              <v-btn
                class="magical-button flex-grow-1"
                variant="elevated"
                :prepend-icon="expandedApps.includes(index) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click.stop="toggleExpand(index)"
              >
                {{ expandedApps.includes(index) ? 'Contraer' : 'Ver Más' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Future Trends - siempre mostrar -->
      <v-card 
        class="trends-card dreamcore-card mt-8" 
        elevation="6"
      >
        <div class="trends-header">
          <div class="d-flex align-center pa-4">
            <v-icon size="32" color="white" class="mr-3">mdi-crystal-ball</v-icon>
            <h2 class="text-h5 font-weight-bold text-white">🔮 Tendencias Futuras</h2>
          </div>
        </div>
        <v-card-text class="pa-4">
          <v-row>
            <v-col
              v-for="trend in futureTrends"
              :key="trend.title"
              cols="12"
              md="4"
            >
              <div class="trend-item">
                <v-icon size="24" :color="trend.color" class="mb-2">{{ trend.icon }}</v-icon>
                <h4 class="text-subtitle-1 font-weight-bold mb-1">{{ trend.title }}</h4>
                <p class="text-body-2 mb-2">{{ trend.description }}</p>
                <v-chip size="small" :color="trend.color" variant="tonal">
                  {{ trend.timeline }}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Aplicaciones principales (datos hardcodeados para los primeros 6)
const applications = ref([
  {
    name: 'ChatGPT',
    category: 'Conversacional',
    description: 'Asistente AI avanzado para conversaciones naturales, resolución de problemas y creatividad.',
    icon: 'mdi-robot',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      'Conversaciones contextuales',
      'Generación de código',
      'Análisis de documentos',
      'Creatividad asistida'
    ],
    useCases: ['Educación', 'Programación', 'Escritura', 'Investigación']
  },
  {
    name: 'DALL-E 3',
    category: 'Generación Visual',
    description: 'Crea imágenes realistas y artísticas a partir de descripciones de texto.',
    icon: 'mdi-image',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      'Generación texto-a-imagen',
      'Estilos artísticos variados',
      'Alta resolución',
      'Edición inteligente'
    ],
    useCases: ['Arte Digital', 'Marketing', 'Diseño', 'Ilustración']
  },
  {
    name: 'GitHub Copilot',
    category: 'Programación',
    description: 'Asistente de código que sugiere funciones completas en tiempo real.',
    icon: 'mdi-github',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      'Autocompletado inteligente',
      'Múltiples lenguajes',
      'Explicaciones de código',
      'Detección de bugs'
    ],
    useCases: ['Desarrollo Web', 'APIs', 'Scripts', 'Debugging']
  },
  {
    name: 'Duolingo AI',
    category: 'Educación',
    description: 'Plataforma de idiomas con AI que personaliza lecciones y conversaciones.',
    icon: 'mdi-translate',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    features: [
      'Conversaciones AI',
      'Pronunciación inteligente',
      'Lecciones adaptativas',
      'Inmersión virtual'
    ],
    useCases: ['Idiomas', 'Viajes', 'Negocios', 'Cultura']
  },
  {
    name: 'Jasper AI',
    category: 'Marketing',
    description: 'Plataforma de escritura AI para marketing y contenido comercial de alta calidad.',
    icon: 'mdi-pen',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    features: [
      'Templates especializados',
      'SEO optimizado',
      'Múltiples tonos',
      'Fact-checking integrado'
    ],
    useCases: ['Marketing', 'Blogs', 'Email', 'Redes Sociales']
  },
  {
    name: 'Runway ML',
    category: 'Video AI',
    description: 'Suite de herramientas AI para creación y edición de video con capacidades avanzadas.',
    icon: 'mdi-video',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    features: [
      'Generación de video',
      'Edición automática',
      'Efectos especiales',
      'Upscaling inteligente'
    ],
    useCases: ['Cine', 'Publicidad', 'Redes Sociales', 'Educación']
  }
])

// Tendencias futuras
const futureTrends = ref([
  {
    title: 'AI Multimodal',
    description: 'Integración de texto, imagen, audio y video.',
    icon: 'mdi-view-grid',
    color: 'purple',
    timeline: '2024-2025'
  },
  {
    title: 'Edge Computing',
    description: 'Procesamiento AI en dispositivos móviles.',
    icon: 'mdi-cellphone',
    color: 'blue',
    timeline: '2025-2026'
  },
  {
    title: 'Autonomous Agents',
    description: 'Agentes AI completamente autónomos.',
    icon: 'mdi-robot-industrial',
    color: 'green',
    timeline: '2026-2027'
  }
])

// Modificar toggleExpand para quitar emits
const toggleExpand = (index) => {
  const appIndex = expandedApps.value.indexOf(index)
  
  if (appIndex > -1) {
    expandedApps.value.splice(appIndex, 1)
  } else {
    expandedApps.value.push(index)
  }
}

// Función para manejar clics en aplicaciones
const handleAppClick = (app, index) => {
  // No hacer nada, se quita el emit
}

const expandedApps = ref([])
</script>

<style scoped>
/* Background simplificado */
.apps-dreamcore-bg {
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

/* App Cards */
.app-card {
  transition: all 0.4s ease;
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  overflow: hidden;
  animation: cardAppear 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.magical-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(103, 58, 183, 0.3);
}

.app-0 { border-top: 4px solid #667eea; }
.app-1 { border-top: 4px solid #f093fb; }
.app-2 { border-top: 4px solid #4facfe; }

.app-header {
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

.features-section {
  background: rgba(240, 248, 255, 0.8);
  border-radius: 8px;
  padding: 8px;
  border-left: 3px solid #667eea;
}

/* Trends */
.trends-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.trend-item {
  text-align: center;
  padding: 16px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
}

.trend-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Button */
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
