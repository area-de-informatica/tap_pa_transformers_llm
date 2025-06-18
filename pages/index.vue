<template>
  <v-container fluid class="dreamcore-bg py-16">
    <!-- Elementos decorativos flotantes -->
    <div class="floating-elements">
      <div class="floating-circle circle-1"></div>
      <div class="floating-circle circle-2"></div>
      <div class="floating-circle circle-3"></div>
      <div class="floating-circle circle-4"></div>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card
          class="dreamcore-card rounded-xl"
          elevation="24"
        >
          <v-card-text class="pa-8 pa-md-12">
            <!-- Encabezado con icono animado -->
            <v-row align="center" justify="center" class="mb-8">
              <div class="brain-icon-wrapper">
                <div class="brain-glow"></div>
                <v-icon size="100" color="white" class="brain-icon">mdi-brain</v-icon>
              </div>
            </v-row>

            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <h1 class="text-h3 font-weight-black gradient-text mb-6">
                  Bienvenido al OVA de
                  <span class="d-block text-h2 mt-2">Inteligencia Artificial</span>
                </h1>
                <p class="text-body-1 text-medium-emphasis font-weight-medium mx-auto description-text">
                  Este entorno virtual de aprendizaje está diseñado para introducirte al fascinante mundo de la IA,
                  enfocándonos en los Modelos de Lenguaje de Gran Tamaño (LLMs), su arquitectura, aplicaciones, y ejemplos reales.
                  <span class="d-block mt-4 text-subtitle-1 primary-text font-weight-bold">
                    ¡Explora a tu ritmo cada módulo desde el menú lateral! 🚀
                  </span>
                </p>
              </v-col>
            </v-row>

            <!-- Chips alusivos a la IA con navegación -->
            <v-row justify="center" class="my-8">
              <v-chip
                v-for="(chip, index) in aiChips"
                :key="index"
                :color="chip.color"
                class="ma-2 py-3 px-4 toy-chip"
                pill
                elevation="8"
                @click="navigateToPage(chip.route)"
                style="cursor: pointer;"
              >
                <v-icon start :icon="chip.icon" class="mr-2"></v-icon>
                {{ chip.label }}
              </v-chip>
            </v-row>

            <!-- Tarjetas de navegación principales -->
            <v-row justify="center" class="my-10">
              <v-col cols="12" md="6" lg="4" v-for="(page, index) in mainPages" :key="index">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    class="navigation-card"
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                    elevation="8"
                    @click="navigateToPage(page.route)"
                    style="cursor: pointer;"
                  >
                    <v-card-text class="text-center pa-6">
                      <v-icon :icon="page.icon" size="60" :color="page.color" class="mb-4"></v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">{{ page.title }}</h3>
                      <p class="text-body-2 text-medium-emphasis">{{ page.description }}</p>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>

            <!-- Banner Ilustrativo con efecto dreamcore -->
            <v-row justify="center" class="my-10">
              <v-hover v-slot="{ isHovering, props }">
                <div class="banner-wrapper" v-bind="props">
                  <div class="banner-glow"></div>
                  <v-card
                    class="banner-card overflow-hidden"
                    :class="{ 'on-hover': isHovering }"
                    elevation="16"
                  >
                    <v-img
                      src="https://cdn.openai.com/labs/images/thumbnail-4.jpg"
                      alt="IA Visual"
                      height="400"
                      cover
                      class="banner-image"
                      :class="{ 'scale-image': isHovering }"
                    >
                      <template v-slot:placeholder>
                        <v-row align="center" justify="center" class="fill-height">
                          <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-row>
                      </template>
                      <div class="image-overlay"></div>
                    </v-img>
                    <v-card
                      class="banner-caption mx-4 mb-4"
                      elevation="4"
                      rounded="xl"
                      color="white"
                    >
                      <v-card-text class="text-center font-weight-bold">
                        🌟 Descubre el universo de la Inteligencia Artificial 🌟
                      </v-card-text>
                    </v-card>
                  </v-card>
                </div>
              </v-hover>
            </v-row>

            <!-- Botones de acceso rápido -->
            <v-row justify="center" class="my-8">
              <v-col cols="12" class="text-center">
                <h3 class="text-h5 font-weight-bold gradient-text mb-6">Acceso Rápido</h3>
                <div class="d-flex flex-wrap justify-center gap-4">
                  <v-btn
                    v-for="(quickAccess, index) in quickAccessButtons"
                    :key="index"
                    :color="quickAccess.color"
                    size="large"
                    rounded="xl"
                    elevation="4"
                    @click="navigateToPage(quickAccess.route)"
                    class="quick-access-btn"
                  >
                    <v-icon start :icon="quickAccess.icon"></v-icon>
                    {{ quickAccess.label }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <!-- Cita inspiradora con estilo Toy Story -->
            <v-row justify="center" class="mt-10">
              <v-col cols="12" md="10" class="text-center">
                <v-card class="quote-card pa-6" elevation="8" rounded="xl">
                  <blockquote class="text-h5 font-weight-bold mb-4">
                    "La inteligencia artificial no es el futuro lejano,
                    <span class="gradient-text d-block mt-2">es el presente transformador."</span>
                  </blockquote>
                  <div class="d-flex align-center justify-center">
                    <v-icon icon="mdi-star" color="amber" class="mr-2"></v-icon>
                    <span class="text-subtitle-1 font-weight-bold primary-text">¡Comienza tu aventura de aprendizaje!</span>
                    <v-icon icon="mdi-star" color="amber" class="ml-2"></v-icon>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <!-- Elementos decorativos -->
            <v-row justify="center" class="mt-8">
              <div class="bouncing-dots">
                <div class="dot dot-1"></div>
                <div class="dot dot-2"></div>
                <div class="dot dot-3"></div>
                <div class="dot dot-4"></div>
                <div class="dot dot-5"></div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const aiChips = ref([
  { label: 'Transformers', color: 'deep-purple-lighten-1', icon: 'mdi-chip', route: '/transformers' },
  { label: 'Procesamiento de Lenguaje Natural', color: 'green-lighten-1', icon: 'mdi-message-text', route: '/PLN' },
  { label: 'Modelos de Lenguaje', color: 'blue-lighten-1', icon: 'mdi-robot', route: '/llms' },
  { label: 'Aplicaciones de IA', color: 'red-lighten-1', icon: 'mdi-lightning-bolt', route: '/applications' },
  { label: 'Evaluaciones', color: 'amber-darken-1', icon: 'mdi-book-open-variant', route: '/exam' }
]);

const mainPages = ref([
  {
    title: 'Acerca de la IA',
    description: 'Conceptos fundamentales y historia de la Inteligencia Artificial',
    icon: 'mdi-information',
    color: 'blue',
    route: '/about'
  },
  {
    title: 'Ejemplos Prácticos',
    description: 'Casos de uso reales y demostraciones interactivas',
    icon: 'mdi-code-tags',
    color: 'green',
    route: '/ia-examples'
  },
  {
    title: 'Evaluación',
    description: 'Pon a prueba tus conocimientos adquiridos',
    icon: 'mdi-school',
    color: 'orange',
    route: '/exam'
  }
]);

const quickAccessButtons = ref([
  { label: 'Transformers', icon: 'mdi-chip', color: 'deep-purple', route: '/transformers' },
  { label: 'LLMs', icon: 'mdi-brain', color: 'indigo', route: '/llms' },
  { label: 'PLN', icon: 'mdi-message-text', color: 'teal', route: '/PLN' },
  { label: 'Aplicaciones', icon: 'mdi-apps', color: 'pink', route: '/applications' }
]);

const navigateToPage = (route) => {
  if (route) {
    router.push(route);
  }
};
</script>

<style scoped>
/* Fondo dreamcore */
.dreamcore-bg {
  background: linear-gradient(135deg, #f5e6fa 0%, #e6f0ff 50%, #f0e6fa 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Tarjeta principal con efecto dreamcore */
.dreamcore-card {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
}

/* Elementos flotantes */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.4;
}

.circle-1 {
  top: 10%;
  left: 5%;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ffcc80, #ff9e80);
  animation: float 15s infinite ease-in-out;
}

.circle-2 {
  top: 20%;
  right: 10%;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #80d8ff, #8c9eff);
  animation: float 18s infinite ease-in-out reverse;
}

.circle-3 {
  bottom: 15%;
  left: 15%;
  width: 180px;
  height: 180px;
  background: linear-gradient(45deg, #b388ff, #ea80fc);
  animation: float 20s infinite ease-in-out;
}

.circle-4 {
  bottom: 10%;
  right: 20%;
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #80cbc4, #a5d6a7);
  animation: float 12s infinite ease-in-out reverse;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(10px) translateX(-15px);
  }
  75% {
    transform: translateY(-15px) translateX(-10px);
  }
}

/* Icono de cerebro con efecto glow */
.brain-icon-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.brain-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #9c27b0, #673ab7);
  border-radius: 50%;
  filter: blur(15px);
  animation: pulse 3s infinite;
}

.brain-icon {
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #9c27b0, #673ab7);
  border-radius: 50%;
  padding: 10px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

/* Texto con gradiente */
.gradient-text {
  background: linear-gradient(to right, #7b1fa2, #512da8, #303f9f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: 'Poppins', sans-serif;
}

.primary-text {
  color: #7b1fa2;
}

.description-text {
  max-width: 800px;
  line-height: 1.8;
}

/* Chips estilo Toy Story */
.toy-chip {
  font-weight: bold !important;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
}

.toy-chip:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

/* Tarjetas de navegación */
.navigation-card {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(5px);
}

.navigation-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.navigation-card.on-hover {
  background: rgba(255, 255, 255, 0.95) !important;
}

/* Botones de acceso rápido */
.quick-access-btn {
  transition: all 0.3s ease;
  font-weight: bold !important;
  letter-spacing: 0.5px;
}

.quick-access-btn:hover {
  transform: scale(1.05);
}

/* Banner con efecto dreamcore */
.banner-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.banner-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.3), rgba(103, 58, 183, 0.3));
  border-radius: 16px;
  filter: blur(20px);
  z-index: 0;
}

.banner-card {
  position: relative;
  z-index: 1;
  border-radius: 16px !important;
  transition: all 0.5s ease;
  overflow: visible !important;
}

.banner-image {
  transition: transform 1.5s ease;
}

.scale-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
}

.banner-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  transform: translateY(50%);
  transition: transform 0.3s ease;
}

.on-hover .banner-caption {
  transform: translateY(30%);
}

/* Cita inspiradora */
.quote-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)) !important;
  border-left: 5px solid #9c27b0 !important;
}

blockquote {
  position: relative;
  font-family: 'Comic Sans MS', 'Poppins', sans-serif;
  line-height: 1.6;
}

/* Puntos decorativos animados */
.bouncing-dots {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
}

.dot-1 {
  background-color: #9c27b0;
  animation-delay: 0s;
}

.dot-2 {
  background-color: #673ab7;
  animation-delay: 0.2s;
}

.dot-3 {
  background-color: #3f51b5;
  animation-delay: 0.4s;
}

.dot-4 {
  background-color: #2196f3;
  animation-delay: 0.6s;
}

.dot-5 {
  background-color: #ff9800;
  animation-delay: 0.8s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>