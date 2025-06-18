<template>
  <div class="dreamcore-academic-bg">
    <!-- Animated dreamcore background -->
    <div class="bg-dreamcore">
      <!-- Floating bubbles with toy story colors -->
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="bubble bubble-4"></div>
      <div class="bubble bubble-5"></div>
      <div class="bubble bubble-6"></div>
      
      <!-- Academic grid with glow -->
      <div class="academic-grid"></div>
      
      <!-- Floating academic icons -->
      <div class="floating-academic">
        <div class="academic-icon icon-1">📚</div>
        <div class="academic-icon icon-2">🧠</div>
        <div class="academic-icon icon-3">💡</div>
        <div class="academic-icon icon-4">🔬</div>
        <div class="academic-icon icon-5">⚡</div>
      </div>
      
      <!-- Dreamcore particles -->
      <div class="dream-particles">
        <div class="particle p-1"></div>
        <div class="particle p-2"></div>
        <div class="particle p-3"></div>
        <div class="particle p-4"></div>
        <div class="particle p-5"></div>
        <div class="particle p-6"></div>
        <div class="particle p-7"></div>
        <div class="particle p-8"></div>
      </div>
    </div>

    <v-container class="content-container py-8">
      <!-- Header with glow effect -->
      <v-card class="mb-6 dreamcore-card header-glow" elevation="8">
        <v-card-text class="pa-6">
          <div class="d-flex align-center mb-4">
            <div class="icon-magical mr-4">
              <v-icon size="40" color="primary" class="magical-icon">mdi-brain</v-icon>
            </div>
            <div>
              <h1 class="text-h4 font-weight-bold gradient-text mb-2">
                Modelos de Lenguaje de Gran Tamaño (LLMs)
              </h1>
              <p class="text-subtitle-1 toy-text">
                ✨ Ejemplos Prácticos y Aplicaciones en el Mundo Real ✨
              </p>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Examples Section -->
      <v-card class="mb-6 dreamcore-card examples-glow" elevation="6">
        <v-card-text class="pa-6">
          <div class="d-flex align-center justify-space-between mb-4">
            <h2 class="text-h5 font-weight-bold gradient-text">
              <v-icon class="mr-2 wiggle-emoji">🤖</v-icon>
              Ejemplos Prácticos de LLMs
            </h2>
            <v-chip class="magical-chip" color="primary" variant="elevated">
              {{ storeIa.llmExamples.length }} Aplicaciones
            </v-chip>
          </div>

          <div v-if="storeIa.llmExamples.length > 0">
            <v-row>
              <v-col
                v-for="(example, index) in storeIa.llmExamples"
                :key="example.name"
                cols="12"
                sm="6"
                lg="4"
              >
                <v-card class="example-card toy-card h-100" elevation="4">
                  <v-img
                    :src="example.imageUrl"
                    height="200px"
                    cover
                    class="magical-image"
                    loading="lazy"
                  >
                    <template v-slot:placeholder>
                      <v-row align="center" justify="center" class="fill-height magical-loading">
                        <v-progress-circular indeterminate color="primary" class="rainbow-loader"></v-progress-circular>
                      </v-row>
                    </template>
                    <div class="image-sparkle">✨</div>
                  </v-img>
                  
                  <v-card-title class="text-h6 toy-title">{{ example.name }}</v-card-title>
                  <v-card-text class="academic-text">{{ example.description }}</v-card-text>
                  
                  <v-card-actions class="pa-4">
                    <v-btn
                      :href="example.url"
                      target="_blank"
                      class="magical-button"
                      variant="elevated"
                      block
                      prepend-icon="mdi-rocket"
                    >
                      🚀 Explorar Aplicación
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
          
          <div v-else class="text-center py-8 loading-magic">
            <div class="magical-loader mb-4">
              <v-progress-circular indeterminate color="primary" size="48" class="rainbow-spinner"></v-progress-circular>
            </div>
            <p class="text-h6 gradient-text">🌟 Cargando magia académica... 🌟</p>
          </div>
        </v-card-text>
      </v-card>

     
    </v-container>
  </div>
</template>

<script setup>
import { useStoreIa } from '../stores/AItypes';
import { onMounted } from 'vue';

const storeIa = useStoreIa();

onMounted(() => {
  storeIa.fetchQuestions();
});
</script>

<style scoped>
/* Dreamcore Academic Background */
.dreamcore-academic-bg {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #ffeef8 0%,   /* Rosa pastel */
    #e8f4fd 25%,  /* Azul académico suave */
    #fff2e6 50%,  /* Naranja Toy Story suave */
    #f0f8ff 75%,  /* Azul cielo */
    #f8f0ff 100%  /* Lavanda */
  );
  position: relative;
  overflow: hidden;
}

.bg-dreamcore {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Floating Bubbles - Toy Story Style */
.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  animation: dreamFloat 15s infinite ease-in-out;
}

.bubble-1 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 5%;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.3), rgba(255, 107, 107, 0.1));
  animation-delay: 0s;
}

.bubble-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 10%;
  background: radial-gradient(circle, rgba(54, 162, 235, 0.3), rgba(54, 162, 235, 0.1));
  animation-delay: -3s;
}

.bubble-3 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  background: radial-gradient(circle, rgba(255, 206, 84, 0.3), rgba(255, 206, 84, 0.1));
  animation-delay: -6s;
}

.bubble-4 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  background: radial-gradient(circle, rgba(153, 102, 255, 0.3), rgba(153, 102, 255, 0.1));
  animation-delay: -9s;
}

.bubble-5 {
  width: 90px;
  height: 90px;
  top: 80%;
  left: 60%;
  background: radial-gradient(circle, rgba(75, 192, 192, 0.3), rgba(75, 192, 192, 0.1));
  animation-delay: -12s;
}

.bubble-6 {
  width: 140px;
  height: 140px;
  bottom: 40%;
  right: 20%;
  background: radial-gradient(circle, rgba(255, 159, 64, 0.3), rgba(255, 159, 64, 0.1));
  animation-delay: -15s;
}

@keyframes dreamFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(15px) translateX(-25px) scale(0.9);
    opacity: 1;
  }
  75% {
    transform: translateY(-20px) translateX(-15px) scale(1.05);
    opacity: 0.7;
  }
}

/* Academic Grid with Dream Effect */
.academic-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(54, 162, 235, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(54, 162, 235, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridDream 25s linear infinite;
  filter: blur(0.5px);
}

@keyframes gridDream {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30px, 30px) rotate(1deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Content Styling */
.content-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
}

/* Dreamcore Cards */
.dreamcore-card {
  background: rgba(255, 255, 255, 0.75) !important;
  backdrop-filter: blur(15px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px !important;
  box-shadow: 
    0 8px 32px rgba(54, 162, 235, 0.15),
    0 4px 16px rgba(255, 255, 255, 0.2);
}

.header-glow {
  animation: headerGlow 4s ease-in-out infinite alternate;
}

@keyframes headerGlow {
  0% {
    box-shadow: 
      0 8px 32px rgba(54, 162, 235, 0.15),
      0 4px 16px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 
      0 12px 40px rgba(54, 162, 235, 0.25),
      0 6px 20px rgba(255, 255, 255, 0.3);
  }
}

.examples-glow {
  animation: examplesGlow 5s ease-in-out infinite alternate;
}

@keyframes examplesGlow {
  0% {
    box-shadow: 
      0 8px 32px rgba(255, 159, 64, 0.15),
      0 4px 16px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 
      0 12px 40px rgba(255, 159, 64, 0.25),
      0 6px 20px rgba(255, 255, 255, 0.3);
  }
}

.questions-glow {
  animation: questionsGlow 6s ease-in-out infinite alternate;
}

@keyframes questionsGlow {
  0% {
    box-shadow: 
      0 8px 32px rgba(153, 102, 255, 0.15),
      0 4px 16px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 
      0 12px 40px rgba(153, 102, 255, 0.25),
      0 6px 20px rgba(255, 255, 255, 0.3);
  }
}

/* Text Styling */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: textShimmer 3s ease-in-out infinite;
}

@keyframes textShimmer {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}

.toy-text {
  color: #64748b;
  font-weight: 500;
}

.academic-text {
  color: #475569;
  line-height: 1.6;
}

/* Button Magic */
.magical-button {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
  color: white !important;
  font-weight: bold;
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.magical-button:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed) !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

/* Responsive */
@media (max-width: 960px) {
  .bubble { display: none; }
  .academic-grid { background-size: 30px 30px; }
}

@media (max-width: 600px) {
  .content-container { padding: 16px 8px; }
  .gradient-text { font-size: 1.5rem !important; }
}
</style>