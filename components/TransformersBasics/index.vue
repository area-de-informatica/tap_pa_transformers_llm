<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6" elevation="3">
          <v-card-title class="text-h5 font-weight-bold">
            ¿Qué son los Transformers?
          </v-card-title>
          <v-card-text>
            Los <strong>Transformers</strong> son modelos de aprendizaje profundo que utilizan mecanismos de autoatención para procesar secuencias completas en paralelo, mejorando la eficiencia y la comprensión del contexto.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-expansion-panels variant="popout">
          <v-expansion-panel>
            <v-expansion-panel-title>¿Cómo funcionan los Transformers?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Los Transformers usan <strong>capas de autoatención</strong> para identificar relaciones entre palabras en un texto. Su arquitectura permite paralelizar el procesamiento y entrenar modelos más grandes de manera eficiente.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>¿Por qué son importantes?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Son fundamentales para modelos de lenguaje como GPT y BERT, utilizados en tareas de PLN como traducción, resumen de textos y chatbots avanzados.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="2">
          <v-card-title class="text-h6">
            <v-icon color="primary">mdi-lightbulb</v-icon>
            Aplicaciones de los Transformers
          </v-card-title>
          <v-card-text>
            <v-chip color="blue-lighten-3" class="ma-1">Traducción Automática</v-chip>
            <v-chip color="green-lighten-3" class="ma-1">Generación de Texto</v-chip>
            <v-chip color="purple-lighten-3" class="ma-1">Asistentes Virtuales</v-chip>
            <v-chip color="red-lighten-3" class="ma-1">Búsqueda Semántica</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
