<template>
  <v-card class="dreamcore-app">
    <v-layout>
      <!-- Barra superior maquiavélica con título reactivo -->
      <v-app-bar class="dark-bar">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="neon-icon">
          ⚡
        </v-app-bar-nav-icon>
        
        <v-toolbar-title class="neon-title">
          <div class="title-transition" :key="currentTitle.main">
            {{ currentTitle.main }}
          </div>
          <div class="subtitle">{{ currentTitle.subtitle }}</div>
        </v-toolbar-title>
        
        <div class="status">
          <div class="pulse-dot"></div>
          {{ currentTitle.status }}
        </div>
      </v-app-bar>

      <!-- Menú lateral dreamcore -->
      <v-navigation-drawer v-model="drawer" temporary class="dark-drawer">
        <div class="drawer-header">
          <div class="control-title">MÓDULOS DE CONTROL</div>
          <div class="current-module">{{ currentTitle.module }}</div>
        </div>
        
        <v-list class="nav-list">
          <v-list-item 
            v-for="(item, i) in items" 
            :key="item.title" 
            :to="item.route"
            class="nav-item"
            :class="{ 'active-item': isCurrentRoute(item.route) }"
          >
            <template v-slot:prepend>
              <span class="item-icon">{{ getIcon(item.title) }}</span>
            </template>
            
            <v-list-item-title class="item-title">
              {{ item.title }}
              <span class="item-code">[{{ String(i + 1).padStart(2, '0') }}]</span>
            </v-list-item-title>
            
            <div v-if="isCurrentRoute(item.route)" class="active-indicator">●</div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Contenido principal -->
      <v-main class="dark-main">
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(false)
const route = useRoute()

const items = [
  { title: 'Inicio', route: '/' },
  { title: 'LLMs', route: '/llms' },
  { title: 'Transformers', route: '/transformers' },
  { title: 'PLN', route: '/PLN' },
  { title: 'Aplicaciones', route: '/applications' },
  { title: 'Ejemplos de IA', route: '/ia-examples' },
  { title: 'Exam', route: '/exam' },
  { title: 'Créditos', route: '/credits' },
]

// Títulos reactivos según la ruta
const pageTitles = {
  '/': {
    main: 'INTRODUCCIÓN A LLMS',
    subtitle: '~ El Conocimiento es Poder ~',
    status: 'INICIO',
    module: 'MÓDULO PRINCIPAL'
  },
  '/llms': {
    main: 'LARGE LANGUAGE MODELS',
    subtitle: '~ Dominando la Inteligencia ~',
    status: 'APRENDIENDO',
    module: 'MÓDULO LLM'
  },
  '/transformers': {
    main: 'ARQUITECTURA TRANSFORMERS',
    subtitle: '~ La Revolución Neural ~',
    status: 'PROCESANDO',
    module: 'MÓDULO TRANSFORMER'
  },
  '/ia-examples': {
    main: 'EJEMPLOS DE IA',
    subtitle: '~ Casos de Uso Reales ~',
    status: 'EXPLORANDO',
    module: 'MÓDULO EJEMPLOS'
  },
  '/applications': {
    main: 'APLICACIONES PRÁCTICAS',
    subtitle: '~ Implementación Real ~',
    status: 'APLICANDO',
    module: 'MÓDULO APPS'
  },
  '/exam': {
    main: 'EVALUACIÓN FINAL',
    subtitle: '~ Demuestra tu Poder ~',
    status: 'EVALUANDO',
    module: 'MÓDULO EXAMEN'
  },
  '/PLN': {
    main: 'PROCESAMIENTO DE LENGUAJE',
    subtitle: '~ Entendiendo el Lenguaje ~',
    status: 'ANALIZANDO',
    module: 'MÓDULO PLN'
  },
  '/credits': {
    main: 'CRÉDITOS DEL PROYECTO',
    subtitle: '~ Reconociendo el Talento ~',
    status: 'AGRADECIENDO',
    module: 'MÓDULO CRÉDITOS'
  }
}

// Título reactivo basado en la ruta actual
const currentTitle = computed(() => {
  return pageTitles[route.path] || pageTitles['/']
})

const getIcon = (title) => {
  const icons = {
    'Inicio': '⚡', 'LLMs': '🧠', 'Transformers': '⚙️',
    'Ejemplos de IA': '👁️', 'Aplicaciones': '🔮', 'Exam': '⚔️', 'PLN': '🌐', 'Créditos': '👥' 
  }
  return icons[title] || '◆'
}

const isCurrentRoute = (itemRoute) => {
  return route.path === itemRoute
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.dreamcore-app {
  background: linear-gradient(135deg, #000000 0%, #1a0033 100%);
  min-height: 100vh;
}

/* Barra superior */
.dark-bar {
  background: linear-gradient(45deg, #0a0a0a 0%, #1a0033 100%) !important;
  border-bottom: 1px solid #ff00ff;
}

.neon-icon {
  color: #ff00ff !important;
  font-size: 1.5rem !important;
  animation: glow 2s infinite;
}

.neon-title {
  font-family: 'Orbitron', monospace !important;
  color: #ffffff !important;
  text-shadow: 0 0 10px #ff00ff;
  text-align: center;
  flex: 1;
}

/* Transición del título */
.title-transition {
  transition: all 0.5s ease;
  animation: titleChange 0.8s ease-in-out;
}

@keyframes titleChange {
  0% { 
    opacity: 0; 
    transform: translateY(-10px) scale(0.95);
    text-shadow: 0 0 5px #ff00ff;
  }
  50% {
    text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff;
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1);
    text-shadow: 0 0 10px #ff00ff;
  }
}

.subtitle {
  font-size: 0.7rem;
  color: #888;
  font-style: italic;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00ff00;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Menú lateral */
.dark-drawer {
  background: linear-gradient(180deg, #000011 0%, #1a0033 100%) !important;
  border-right: 1px solid #ff00ff;
}

.drawer-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 0, 255, 0.3);
}

.control-title {
  font-family: 'Orbitron', monospace;
  color: #ff00ff;
  font-weight: 700;
  text-align: center;
  font-size: 0.9rem;
}

.current-module {
  font-family: 'Orbitron', monospace;
  color: #00ff00;
  font-size: 0.7rem;
  text-align: center;
  margin-top: 5px;
  opacity: 0.8;
}

.nav-list {
  padding: 10px;
}

.nav-item {
  margin: 8px 0;
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.nav-item:hover {
  border-color: #ff00ff;
  background: rgba(255, 0, 255, 0.1);
  transform: translateX(5px);
}

/* Item activo */
.active-item {
  border-color: #00ff00 !important;
  background: rgba(0, 255, 0, 0.1) !important;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.active-indicator {
  color: #00ff00;
  font-size: 1.2rem;
  animation: activeGlow 2s infinite;
}

@keyframes activeGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; text-shadow: 0 0 10px #00ff00; }
}

.item-icon {
  font-size: 1.2rem;
  margin-right: 10px;
}

.item-title {
  color: #ffffff !important;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.item-code {
  color: #888;
  font-size: 0.8rem;
  font-family: 'Orbitron', monospace;
}

/* Contenido principal */
.dark-main {
  background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
}

/* Animaciones */
@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px #ff00ff; }
  50% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* Responsive */
@media (max-width: 768px) {
  .neon-title {
    font-size: 0.9rem;
  }
  
  .subtitle {
    font-size: 0.6rem;
  }
}
</style>
