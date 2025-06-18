<template>
    <div class="pln-dreamcore-bg">
      <!-- Background simplificado -->
      <div class="bg-magic">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="dream-grid"></div>
      </div>
  
      <v-container class="content-wrapper pa-6">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Header principal -->
            <v-card class="header-card dreamcore-card mb-6" elevation="8">
              <v-card-text class="pa-6 text-center">
                <div class="d-flex align-center justify-center mb-4">
                  <v-icon size="48" color="primary" class="pulse-brain mr-4">mdi-brain</v-icon>
                  <div>
                    <h1 class="text-h4 font-weight-black gradient-title">
                      🧠 INTRODUCCIÓN A LLMS 🧠
                    </h1>
                    <p class="text-subtitle-1 subtitle-magic mt-2">
                      ✨ Procesamiento de Lenguaje Natural Avanzado ✨
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
  
            <!-- Secciones de contenido -->
            <div v-if="secciones.length">
              <v-card
                v-for="(section, index) in secciones"
                :key="index"
                class="section-card magical-card mb-4"
                :class="{ 'expanded': expandedSections.includes(index) }"
                elevation="6"
              >
                <!-- Header de la sección -->
                <div class="section-header" :style="{ background: getSectionGradient(index) }">
                  <div class="d-flex align-center pa-4">
                    <v-icon size="28" color="white" class="mr-3">{{ getSectionIcon(index) }}</v-icon>
                    <h3 class="text-h6 font-weight-bold text-white">{{ section.subtitulo }}</h3>
                  </div>
                </div>
  
                <!-- Contenido básico -->
                <v-card-text class="pa-4">
                  <p class="text-body-1 mb-3 section-content">{{ section.contenido }}</p>
                  
                  <!-- Imagen si existe -->
                  <v-img
                    v-if="section.imagen"
                    :src="section.imagen"
                    aspect-ratio="16/9"
                    class="my-3 section-image"
                    cover
                    rounded="lg"
                  />
  
                  <!-- Contenido expandido -->
                  <v-expand-transition>
                    <div v-if="expandedSections.includes(index)" class="expanded-content">
                      <!-- Conceptos clave -->
                      <div class="key-concepts mb-4">
                        <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">
                          🎯 Conceptos Clave:
                        </h4>
                        <v-list density="compact">
                          <v-list-item
                            v-for="concept in getKeyConcepts(index)"
                            :key="concept"
                            class="px-0"
                          >
                            <template v-slot:prepend>
                              <v-icon size="small" color="success">mdi-lightbulb</v-icon>
                            </template>
                            <v-list-item-title class="text-body-2">{{ concept }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </div>
  
                      <!-- Aplicaciones prácticas -->
                      <div class="applications mb-4">
                        <h4 class="text-subtitle-1 font-weight-bold mb-2 gradient-text">
                          🚀 Aplicaciones Prácticas:
                        </h4>
                        <div class="d-flex flex-wrap gap-2">
                          <v-chip
                            v-for="app in getApplications(index)"
                            :key="app"
                            size="small"
                            :color="getChipColor(index)"
                            variant="elevated"
                          >
                            {{ app }}
                          </v-chip>
                        </div>
                      </div>
  
                      <!-- Dato curioso -->
                      <div class="fun-fact">
                        <v-alert type="info" variant="tonal" density="compact">
                          <template v-slot:prepend>
                            <v-icon>mdi-star</v-icon>
                          </template>
                          <strong>💡 Dato Curioso:</strong> {{ getFunFact(index) }}
                        </v-alert>
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
                    @click="toggleSectionExpand(index)"
                  >
                    {{ expandedSections.includes(index) ? 'Contraer' : 'Explorar Más' }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
  
            <!-- Sección de evaluación -->
            <div v-if="preguntas.length">
              <v-card class="evaluation-card dreamcore-card mt-6" elevation="6">
                <div class="evaluation-header">
                  <div class="d-flex align-center pa-4">
                    <v-icon size="32" color="white" class="mr-3">mdi-help-circle</v-icon>
                    <h3 class="text-h5 font-weight-bold text-white">🎯 Evaluación del Conocimiento</h3>
                  </div>
                </div>
  
                <v-card-text class="pa-4">
                  <p class="text-body-1 mb-4">
                    Pon a prueba tu comprensión sobre los conceptos de LLMs:
                  </p>
  
                  <v-card
                    v-for="(q, index) in preguntas"
                    :key="index"
                    class="question-card mb-3"
                    :class="{ 'expanded': expandedQuestions.includes(index) }"
                    elevation="2"
                  >
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center mb-2">
                        <v-chip color="primary" size="small" class="mr-3">{{ index + 1 }}</v-chip>
                        <p class="font-weight-medium mb-0">{{ q.question }}</p>
                      </div>
  
                  
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { onMounted, computed, ref } from 'vue'
  import { useStorePLN } from '@/stores/PLN'
  
  const storePLN = useStorePLN()
  const expandedSections = ref([])
  const expandedQuestions = ref([])
  
  const secciones = computed(() => storePLN.secciones)
  const preguntas = computed(() => storePLN.preguntas)
  
  // Funciones para contenido dinámico
  const getSectionGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ]
    return gradients[index % gradients.length]
  }
  
  const getSectionIcon = (index) => {
    const icons = ['mdi-brain', 'mdi-chip', 'mdi-network', 'mdi-code-tags']
    return icons[index % icons.length]
  }
  
  const getChipColor = (index) => {
    const colors = ['purple', 'pink', 'blue', 'green']
    return colors[index % colors.length]
  }
  
  const getKeyConcepts = (index) => {
    const concepts = [
      [
        'Procesamiento de secuencias de texto',
        'Comprensión contextual avanzada',
        'Generación de respuestas coherentes'
      ],
      [
        'Arquitecturas transformer',
        'Mecanismos de atención',
        'Entrenamiento auto-supervisado'
      ],
      [
        'Fine-tuning para tareas específicas',
        'Transfer learning en NLP',
        'Optimización de rendimiento'
      ]
    ]
    return concepts[index % concepts.length] || concepts[0]
  }
  
  const getApplications = (index) => {
    const apps = [
      ['Chatbots', 'Traducción', 'Resúmenes'],
      ['Análisis de Sentimientos', 'Q&A', 'Clasificación'],
      ['Generación de Código', 'Escritura Creativa', 'Asistentes']
    ]
    return apps[index % apps.length] || apps[0]
  }
  
  const getFunFact = (index) => {
    const facts = [
      'GPT-3 tiene 175 mil millones de parámetros, equivalente a leer toda Wikipedia 1000 veces.',
      'Los transformers procesan todas las palabras simultáneamente, no secuencialmente como los RNNs.',
      'BERT puede entender el contexto bidireccional, leyendo tanto hacia adelante como hacia atrás.'
    ]
    return facts[index % facts.length] || facts[0]
  }
  
  const getAnswerColor = (index) => {
    const colors = ['primary', 'success', 'warning', 'error']
    return colors[index % colors.length]
  }
  
  const getAnswerIcon = (index) => {
    const icons = ['mdi-alpha-a', 'mdi-alpha-b', 'mdi-alpha-c', 'mdi-alpha-d']
    return icons[index % icons.length]
  }
  
  const toggleSectionExpand = (index) => {
    const sectionIndex = expandedSections.value.indexOf(index)
    if (sectionIndex > -1) {
      expandedSections.value.splice(sectionIndex, 1)
    } else {
      expandedSections.value.push(index)
    }
  }
  
  const toggleQuestionExpand = (index) => {
    const questionIndex = expandedQuestions.value.indexOf(index)
    if (questionIndex > -1) {
      expandedQuestions.value.splice(questionIndex, 1)
    } else {
      expandedQuestions.value.push(index)
    }
  }
  
  onMounted(() => {
    storePLN.fetchPLNData()
  })
  </script>
  
  <style scoped>
  /* Background */
  .pln-dreamcore-bg {
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
  
  .pulse-brain {
    animation: brainPulse 3s ease-in-out infinite;
  }
  
  @keyframes brainPulse {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(103, 58, 183, 0.5)); }
    50% { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(103, 58, 183, 0.8)); }
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
  
  .section-content {
    color: #475569;
    line-height: 1.6;
    text-align: justify;
  }
  
  .section-image {
    transition: transform 0.3s ease;
  }
  
  .section-image:hover {
    transform: scale(1.02);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
  }
  
  /* Expanded Content */
  .expanded-content {
    border-top: 1px solid rgba(103, 58, 183, 0.1);
    padding-top: 16px;
    margin-top: 16px;
  }
  
  .key-concepts {
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
  
  .fun-fact {
    margin-top: 12px;
  }
  
  /* Evaluation Section */
  .evaluation-header {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  
  .question-card {
    transition: all 0.3s ease;
    border-radius: 12px !important;
    background: rgba(255, 255, 255, 0.9) !important;
  }
  
  .question-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .answer-item {
    transition: all 0.3s ease;
    border-radius: 8px;
    margin: 2px 0;
  }
  
  .answer-item:hover {
    background: rgba(103, 58, 183, 0.05);
    transform: translateX(5px);
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
    .gradient-title { font-size: 1.8rem !important; }
  }
  </style>
  