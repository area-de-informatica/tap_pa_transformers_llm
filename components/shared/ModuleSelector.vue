<template>
    <v-card class="module-selector dreamcore-card" elevation="6">
      <v-card-text class="pa-4">
        <h3 class="text-h6 gradient-text mb-4">{{ title }}</h3>
        
        <!-- Selector con v-model -->
        <v-select
          v-model="selectedModule"
          :items="moduleOptions"
          :label="selectLabel"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :loading="isLoading"
          variant="outlined"
          @update:model-value="onModuleChange"
        >
          <template v-slot:item="{ props: itemProps, item }">
            <v-list-item v-bind="itemProps">
              <template v-slot:prepend>
                <v-icon :color="item.raw.color">{{ item.raw.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ item.raw.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.raw.description }}</v-list-item-subtitle>
            </v-list-item>
          </template>
        </v-select>
  
        <!-- Información del módulo seleccionado -->
        <v-expand-transition>
          <v-card 
            v-if="selectedModuleInfo" 
            class="module-info mt-4" 
            variant="tonal"
          >
            <v-card-text class="pa-3">
              <div class="d-flex align-items-center mb-2">
                <v-icon :color="selectedModuleInfo.color" class="mr-2">
                  {{ selectedModuleInfo.icon }}
                </v-icon>
                <h4 class="text-subtitle-1 font-weight-bold">
                  {{ selectedModuleInfo.title }}
                </h4>
              </div>
              <p class="text-body-2 mb-2">{{ selectedModuleInfo.description }}</p>
              
              <!-- Estadísticas del módulo -->
              <div class="module-stats">
                <v-chip 
                  size="small" 
                  class="mr-2" 
                  :color="selectedModuleInfo.difficulty === 'Fácil' ? 'success' : 
                         selectedModuleInfo.difficulty === 'Medio' ? 'warning' : 'error'"
                >
                  {{ selectedModuleInfo.difficulty }}
                </v-chip>
                <v-chip size="small" variant="outlined">
                  {{ selectedModuleInfo.duration }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-expand-transition>
  
        <!-- Acciones -->
        <div class="actions mt-4" v-if="showActions">
          <v-btn
            v-if="selectedModule && allowStart"
            color="primary"
            @click="startModule"
            class="mr-2"
          >
            <v-icon start>mdi-play</v-icon>
            Comenzar Módulo
          </v-btn>
          
          <v-btn
            v-if="allowReset"
            variant="outlined"
            @click="resetSelection"
          >
            <v-icon start>mdi-refresh</v-icon>
            Limpiar
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
      default: 'Seleccionar Módulo'
    },
    
    modules: {
      type: Array,
      required: true
    },
    
    selectLabel: {
      type: String,
      default: 'Módulo de aprendizaje'
    },
    
    placeholder: {
      type: String,
      default: 'Elige un módulo para comenzar'
    },
    
    isDisabled: {
      type: Boolean,
      default: false
    },
    
    isLoading: {
      type: Boolean,
      default: false
    },
    
    showActions: {
      type: Boolean,
      default: true
    },
    
    allowStart: {
      type: Boolean,
      default: true
    },
    
    allowReset: {
      type: Boolean,
      default: true
    }
  })
  
  // 🔄 V-MODEL
  const selectedModule = defineModel('selectedModule', {
    type: [String, Number, Object],
    default: null
  })
  
  // 📡 EMITS
  const emit = defineEmits([
    'module-selected',
    'module-changed',
    'module-started',
    'selection-reset'
  ])
  
  // 💡 COMPUTED
  const moduleOptions = computed(() => {
    return props.modules.map(module => ({
      title: module.title || module.name,
      value: module.id || module.value,
      ...module
    }))
  })
  
  const selectedModuleInfo = computed(() => {
    if (!selectedModule.value) return null
    
    return props.modules.find(module => 
      (module.id || module.value) === selectedModule.value
    )
  })
  
  // 🎨 METHODS
  const onModuleChange = (value) => {
    const moduleInfo = props.modules.find(module => 
      (module.id || module.value) === value
    )
    
    emit('module-changed', {
      selectedValue: value,
      moduleInfo: moduleInfo,
      timestamp: new Date().toISOString()
    })
    
    emit('module-selected', moduleInfo)
  }
  
  const startModule = () => {
    if (!selectedModuleInfo.value) return
    
    emit('module-started', {
      module: selectedModuleInfo.value,
      startedAt: new Date().toISOString()
    })
  }
  
  const resetSelection = () => {
    selectedModule.value = null
    emit('selection-reset')
  }
  
  // 👀 WATCHERS
  watch(selectedModule, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      console.log(`Módulo cambiado de ${oldValue} a ${newValue}`)
    }
  })
  </script>
  
  <style scoped>
  .module-selector {
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
  
  .module-info {
    border-left: 4px solid #667eea;
  }
  
  .actions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  </style>
  