<template>
  <v-container class="pa-6">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold">Modelos de Lenguaje de Gran Tamaño</h2>
      </v-col>
    </v-row>
    
    <v-row>
      <!-- Primera Tarjeta -->
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="text-h6 font-weight-bold">¿Qué son los modelos de lenguaje de gran tamaño?</h3>
          <p>
            LLM son modelos de aprendizaje profundo basados en transformers, capaces de comprender y generar texto gracias a la autoatención paralela.
          </p>
        </v-card>
      </v-col>
      
      <!-- Segunda Tarjeta -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" color="primary" dark>
          <h3 class="text-h6 font-weight-bold">¿Por qué son importantes los LLM?</h3>
          <p>
            Son versátiles y útiles para tareas como traducción, resumen, generación de texto y más. Permiten interacciones naturales con la tecnología.
          </p>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="font-weight-bold">¿Por qué son importantes los LLM?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Son versátiles y útiles para tareas como traducción, resumen y generación de texto. También se pueden ajustar con técnicas de fine-tuning.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-row>
            <v-col cols="2" class="d-flex align-center">
              <v-icon color="primary">mdi-robot-outline</v-icon>
            </v-col>
            <v-col>
              <h4 class="text-subtitle-1 font-weight-bold">Aplicaciones de los LLM:</h4>
              <p>
                Creación de texto, clasificación, asistencia virtual, búsqueda, programación y más.
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-3"></v-divider>
          <v-row>
            <v-col cols="2" class="d-flex align-center">
              <v-icon color="primary">mdi-translate</v-icon>
            </v-col>
            <v-col>
              <h4 class="text-subtitle-1 font-weight-bold">Versatilidad:</h4>
              <p>
                Capacidad multilingüe y adaptación a múltiples industrias.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4" color="primary" dark>
          <h3 class="text-h6 font-weight-bold">Basado en:</h3>
          <v-chip color="grey darken-3" text-color="white">Documentación AWS</v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>