<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12">
        <v-alert type="info" border="start" color="indigo-lighten-3" elevation="2">
          <v-alert-title>Ejemplos de herramientas basadas en LLMs</v-alert-title>
          Estas herramientas demuestran cómo los Modelos de Lenguaje de Gran Tamaño están transformando la interacción humano-máquina.
        </v-alert>
      </v-col>

      <v-col cols="12" md="6" lg="4" v-for="tool in tools" :key="tool.name">
        <v-card elevation="6" class="pa-3">
          <v-card-title class="text-h6 text-indigo-darken-2">
            {{ tool.name }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle-2 text-grey">
            {{ tool.category }}
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ tool.description }}
          </v-card-text>
          <v-chip class="ma-1" color="blue-lighten-3">{{ tool.use }}</v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tools = [
  {
    name: 'ChatGPT',
    category: 'Asistente conversacional',
    description: 'Genera texto, responde preguntas, redacta correos y mucho más.',
    use: 'Procesamiento de texto',
  },
  {
    name: 'Copilot (GitHub)',
    category: 'Asistencia para código',
    description: 'Ayuda a los programadores sugiriendo código en tiempo real.',
    use: 'Programación asistida',
  },
  {
    name: 'Bard (Google)',
    category: 'Motor de conocimiento',
    description: 'Proporciona respuestas generativas combinando datos y contexto.',
    use: 'Consulta y generación de contenido',
  },
  {
    name: 'Claude (Anthropic)',
    category: 'IA responsable',
    description: 'Diseñado para ofrecer asistencia segura y centrada en el usuario.',
    use: 'Asistencia ética con IA',
  },
]
</script>
