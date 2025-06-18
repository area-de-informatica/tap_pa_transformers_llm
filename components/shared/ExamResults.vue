<template>
    <div class="exam-results">
      <!-- Estadísticas principales -->
      <v-row class="mb-4">
        <v-col cols="3" v-for="stat in mainStats" :key="stat.label">
          <div class="stat-card text-center pa-3">
            <div class="text-h4 font-weight-bold" :style="{ color: stat.color }">
              {{ stat.value }}
            </div>
            <div class="text-caption">{{ stat.label }}</div>
          </div>
        </v-col>
      </v-row>
  
      <!-- Calificación y feedback -->
      <v-alert :type="gradeType" class="mb-4" prominent>
        <div class="d-flex align-items-center">
          <v-icon size="32" class="mr-3">{{ gradeIcon }}</v-icon>
          <div>
            <h3 class="text-h6 font-weight-bold">{{ gradeTitle }}</h3>
            <p class="mb-0">{{ gradeMessage }}</p>
          </div>
        </div>
      </v-alert>
  
      <!-- Acciones -->
      <div class="actions text-center">
        <v-btn
          color="primary"
          size="large"
          @click="$emit('restart-exam')"
          class="mr-3"
        >
          <v-icon start>mdi-refresh</v-icon>
          Reintentar Examen
        </v-btn>
        
        <v-btn
          variant="outlined"
          size="large"
          @click="$emit('review-answers')"
        >
          <v-icon start>mdi-eye</v-icon>
          Revisar Respuestas
        </v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  // 📝 PROPS
  const props = defineProps({
    totalQuestions: {
      type: Number,
      required: true
    },
    correctAnswers: {
      type: Number,
      required: true
    },
    examDuration: {
      type: Number,
      default: 0
    },
    answersHistory: {
      type: Array,
      default: () => []
    }
  })
  
  // 📡 EMITS
  defineEmits(['restart-exam', 'review-answers'])
  
  // 💡 COMPUTED
  const percentage = computed(() => {
    return Math.round((props.correctAnswers / props.totalQuestions) * 100)
  })
  
  const mainStats = computed(() => [
    {
      label: 'Correctas',
      value: props.correctAnswers,
      color: '#4caf50'
    },
    {
      label: 'Incorrectas',
      value: props.totalQuestions - props.correctAnswers,
      color: '#f44336'
    },
    {
      label: 'Porcentaje',
      value: `${percentage.value}%`,
      color: '#2196f3'
    },
    {
      label: 'Tiempo',
      value: `${Math.floor(props.examDuration / 60)}:${(props.examDuration % 60).toString().padStart(2, '0')}`,
      color: '#ff9800'
    }
  ])
  
  const gradeType = computed(() => {
    return percentage.value >= 80 ? 'success' : percentage.value >= 60 ? 'warning' : 'error'
  })
  
  const gradeIcon = computed(() => {
    return percentage.value >= 80 ? 'mdi-trophy' : percentage.value >= 60 ? 'mdi-thumb-up' : 'mdi-school'
  })
  
  const gradeTitle = computed(() => {
    return percentage.value >= 80 ? '¡Excelente!' : percentage.value >= 60 ? 'Buen trabajo' : 'Sigue practicando'
  })
  
  const gradeMessage = computed(() => {
    if (percentage.value >= 80) return 'Dominas muy bien los conceptos de LLMs.'
    if (percentage.value >= 60) return 'Tienes una buena base, revisa algunos temas.'
    return 'Repasa el material y vuelve a intentarlo.'
  })
  </script>
  
  <style scoped>
  .stat-card {
    background: rgba(248, 250, 252, 0.8);
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .actions {
    margin-top: 24px;
  }
  </style>
  