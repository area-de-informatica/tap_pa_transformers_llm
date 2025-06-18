<template>
    <v-card class="progress-tracker dreamcore-card" elevation="6">
      <v-card-text class="pa-4">
        <!-- Header con props -->
        <div class="d-flex align-items-center justify-space-between mb-4">
          <h3 class="text-h6 gradient-text">{{ title }}</h3>
          <v-chip :color="statusColor" variant="elevated">
            {{ currentStep }} / {{ totalSteps }}
          </v-chip>
        </div>
  
        <!-- Barra de progreso con v-model -->
        <div class="progress-section mb-4">
          <div class="d-flex justify-space-between mb-2">
            <span class="text-body-2">{{ progressLabel }}</span>
            <span class="text-body-2">{{ progressPercentage }}%</span>
          </div>
          
          <v-progress-linear
            v-model="progressValue"
            :color="progressColor"
            height="8"
            rounded
            :striped="isAnimated"
            :indeterminate="isLoading"
          />
        </div>
  
        <!-- Estadísticas con props -->
        <v-row v-if="showStats">
          <v-col cols="4" v-for="stat in statistics" :key="stat.label">
            <div class="stat-item text-center">
              <div class="text-h6 font-weight-bold" :style="{ color: stat.color }">
                {{ stat.value }}
              </div>
              <div class="text-caption">{{ stat.label }}</div>
            </div>
          </v-col>
        </v-row>
  
        <!-- Controles con emits -->
        <div class="controls mt-4" v-if="showControls">
          <v-btn
            v-if="canGoBack"
            variant="outlined"
            size="small"
            @click="goBack"
            class="mr-2"
          >
            <v-icon start>mdi-chevron-left</v-icon>
            Anterior
          </v-btn>
          
          <v-btn
            v-if="canGoNext"
            color="primary"
            size="small"
            @click="goNext"
          >
            Siguiente
            <v-icon end>mdi-chevron-right</v-icon>
          </v-btn>
          
          <v-btn
            v-if="canReset"
            variant="text"
            size="small"
            @click="resetProgress"
            class="ml-2"
          >
            <v-icon start>mdi-refresh</v-icon>
            Reiniciar
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { computed, watch } from 'vue'
  
  // 📝 PROPS
  const props = defineProps({
    title: {
      type: String,
      default: 'Progreso'
    },
    
    totalSteps: {
      type: Number,
      required: true,
      validator: (value) => value > 0
    },
    
    progressLabel: {
      type: String,
      default: 'Progreso general'
    },
    
    showStats: {
      type: Boolean,
      default: true
    },
    
    showControls: {
      type: Boolean,
      default: true
    },
    
    isAnimated: {
      type: Boolean,
      default: true
    },
    
    isLoading: {
      type: Boolean,
      default: false
    },
    
    statistics: {
      type: Array,
      default: () => []
    },
    
    canGoBack: {
      type: Boolean,
      default: true
    },
    
    canGoNext: {
      type: Boolean,
      default: true
    },
    
    canReset: {
      type: Boolean,
      default: true
    }
  })
  
  // 🔄 V-MODELS
  const currentStep = defineModel('currentStep', {
    type: Number,
    default: 1
  })
  
  const progressValue = defineModel('progressValue', {
    type: Number,
    default: 0
  })
  
  // 📡 EMITS
  const emit = defineEmits([
    'step-changed',
    'progress-updated',
    'next-step',
    'previous-step',
    'reset-progress',
    'progress-completed'
  ])
  
  // 💡 COMPUTED
  const progressPercentage = computed(() => {
    return Math.round((currentStep.value / props.totalSteps) * 100)
  })
  
  const statusColor = computed(() => {
    const percentage = progressPercentage.value
    if (percentage === 100) return 'success'
    if (percentage >= 75) return 'info'
    if (percentage >= 50) return 'warning'
    return 'primary'
  })
  
  const progressColor = computed(() => {
    return statusColor.value
  })
  
  // 🎨 METHODS
  const goNext = () => {
    if (currentStep.value < props.totalSteps) {
      currentStep.value++
      emit('next-step', currentStep.value)
      emit('step-changed', {
        step: currentStep.value,
        direction: 'next',
        percentage: progressPercentage.value
      })
    }
  }
  
  const goBack = () => {
    if (currentStep.value > 1) {
      currentStep.value--
      emit('previous-step', currentStep.value)
      emit('step-changed', {
        step: currentStep.value,
        direction: 'back',
        percentage: progressPercentage.value
      })
    }
  }
  
  const resetProgress = () => {
    currentStep.value = 1
    progressValue.value = 0
    emit('reset-progress')
    emit('step-changed', {
      step: 1,
      direction: 'reset',
      percentage: 0
    })
  }
  
  // 👀 WATCHERS
  watch(currentStep, (newStep) => {
    progressValue.value = (newStep / props.totalSteps) * 100
    emit('progress-updated', {
      step: newStep,
      percentage: progressPercentage.value,
      isCompleted: newStep === props.totalSteps
    })
    
    if (newStep === props.totalSteps) {
      emit('progress-completed', {
        totalSteps: props.totalSteps,
        completedAt: new Date().toISOString()
      })
    }
  })
  </script>
  
  <style scoped>
  .progress-tracker {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(10px);
    border-radius: 16px !important;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
  }
  
  .stat-item {
    padding: 8px;
    background: rgba(248, 250, 252, 0.8);
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .stat-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  