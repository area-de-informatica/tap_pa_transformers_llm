<template>
  <v-container>
    <v-card class="elevation-12 pa-6 exam-card" v-if="!loading && !error && isReady">
      <!-- Carátula -->
      <v-card-title class="headline text-center gradient-text">
        <v-icon size="64" color="primary">mdi-brain</v-icon>
        <h1 class="display-1">Evaluación de LLMs</h1>
        <p class="subtitle-1">Demuestra tu Poder</p>
      </v-card-title>
      <v-card-subtitle class="text-center">
        Responde las {{ totalQuestions }} preguntas sobre Large Language Models
      </v-card-subtitle>
      <v-divider class="my-4"></v-divider>

      <v-card-text v-if="currentQuestion && !isCompleted">
        <p class="question-text">Pregunta {{ currentIndex + 1 }} de {{ totalQuestions }}</p>
        <p class="question-content">{{ currentQuestion.text }}</p>
        
        <!-- Solución corregida: Remover @change y usar solo v-model -->
        <v-radio-group v-model="selectedAnswer">
          <v-radio
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            :label="option"
            :value="index"
          ></v-radio>
        </v-radio-group>
        
        <v-btn
          :disabled="selectedAnswer === null"
          @click="handleNext"
          color="primary"
          class="mt-4"
        >
          {{ currentIndex < totalQuestions - 1 ? 'Siguiente' : 'Finalizar' }}
        </v-btn>
        
        <!-- Debug info para verificar la selección -->
        <v-alert v-if="selectedAnswer !== null" type="info" class="mt-4">
          Respuesta seleccionada: {{ selectedAnswer }} - "{{ currentQuestion.options[selectedAnswer] }}"
        </v-alert>
      </v-card-text>
      
      <v-card-text v-else-if="isCompleted">
        <h3 class="text-center">Resultados</h3>
        <v-divider class="my-4"></v-divider>
        <p class="text-h6 text-center">Correctas: {{ correctAnswers }} de {{ totalQuestions }}</p>
        <p class="text-h6 text-center">Puntuación: {{ ((correctAnswers / totalQuestions) * 100).toFixed(2) }}%</p>
        <v-btn @click="handleReset" color="secondary" class="mt-4">Reiniciar</v-btn>
      </v-card-text>
    </v-card>
    
    <v-card v-else-if="error" class="elevation-6 pa-6">
      <v-card-text class="text-center">
        <p>{{ error }}</p>
        <v-btn @click="fetchQuestions" color="primary">Reintentar</v-btn>
      </v-card-text>
    </v-card>
    
    <v-card v-else-if="loading" class="elevation-6 pa-6">
      <v-card-text class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p>Cargando preguntas...</p>
      </v-card-text>
    </v-card>
    
    <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// Simulando el store para el ejemplo
const mockStore = {
  questions: ref([
    { id: 1, text: '¿Qué es un LLM?', options: ['Large Language Model', 'Linguistic Learning Module', 'Light Learning Machine'], correctAnswer: 0 },
    { id: 2, text: '¿Cuál es un modelo de LLM popular?', options: ['Grok', 'Calculator', 'Clock'], correctAnswer: 0 },
    { id: 3, text: '¿Qué tecnología subyace en muchos LLMs modernos?', options: ['Transformers', 'Transistors', 'Translators'], correctAnswer: 0 }
  ]),
  currentIndex: ref(0),
  userAnswers: ref([null, null, null]),
  isCompleted: ref(false),
  loading: ref(false),
  error: ref(null)
}

const props = defineProps({
  initialQuestions: { type: Array, default: () => [] },
  initialIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['submit-answer', 'next-question', 'complete-exam', 'reset-exam'])

const selectedAnswer = ref(null)
const isReady = ref(true)

// Computed properties
const loading = computed(() => mockStore.loading.value)
const error = computed(() => mockStore.error.value)
const currentIndex = computed(() => mockStore.currentIndex.value)
const currentQuestion = computed(() => mockStore.questions.value[mockStore.currentIndex.value])
const totalQuestions = computed(() => mockStore.questions.value.length)
const correctAnswers = computed(() => 
  mockStore.userAnswers.value.filter((answer, index) => 
    answer === mockStore.questions.value[index]?.correctAnswer
  ).length
)
const isCompleted = computed(() => mockStore.isCompleted.value)

// Watch para resetear la respuesta seleccionada cuando cambia la pregunta
watch(currentIndex, () => {
  selectedAnswer.value = mockStore.userAnswers.value[currentIndex.value]
})

async function fetchQuestions() {
  // Simulación de carga
  mockStore.loading.value = true
  setTimeout(() => {
    mockStore.loading.value = false
  }, 1000)
}

function handleNext() {
  if (selectedAnswer.value !== null) {
    // Guardar la respuesta
    mockStore.userAnswers.value[currentIndex.value] = selectedAnswer.value
    emit('submit-answer', selectedAnswer.value)
    
    if (currentIndex.value < totalQuestions.value - 1) {
      // Siguiente pregunta
      mockStore.currentIndex.value++
      emit('next-question')
    } else {
      // Completar examen
      mockStore.isCompleted.value = true
      emit('complete-exam')
    }
  }
}

function handleReset() {
  mockStore.currentIndex.value = 0
  mockStore.userAnswers.value = new Array(totalQuestions.value).fill(null)
  mockStore.isCompleted.value = false
  selectedAnswer.value = null
  emit('reset-exam')
}

onMounted(() => {
  // Inicializar con la respuesta guardada si existe
  selectedAnswer.value = mockStore.userAnswers.value[currentIndex.value]
})
</script>

<style scoped>
.exam-card {
  max-width: 700px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(45deg, #4a90e2, #9013fe);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}

.question-text {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.question-content {
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 1rem;
}

.v-btn {
  margin-right: 10px;
  text-transform: none;
}

.v-card-title {
  padding: 20px;
}

.v-card-subtitle {
  color: #7f8c8d;
}
</style>