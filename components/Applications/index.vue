<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-alert type="info" border="start" variant="tonal" color="indigo-lighten-3">
          <v-icon start>mdi-robot</v-icon>
          <strong>¿Dónde se usan los LLMs?</strong> Los Modelos de Lenguaje de Gran Tamaño tienen aplicaciones clave en diversas industrias.
        </v-alert>
      </v-col>

      <v-col cols="12" md="6" lg="4" v-for="(app, i) in applications" :key="i">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 12 : 4"
            class="pa-4 rounded-xl"
            :color="app.color"
            dark
          >
            <v-card-title class="text-h6">
              <v-icon start class="mr-2">{{ app.icon }}</v-icon>{{ app.title }}
            </v-card-title>
            <v-card-text>{{ app.description }}</v-card-text>
          </v-card>
        </v-hover>
      </v-col>

     
    </v-row>
  </v-container>
</template>

<script setup>
const applications = [
  {
    title: 'Chatbots y Asistentes Virtuales',
    description: 'LLMs permiten respuestas humanas en sistemas como Siri, Alexa y atención al cliente automatizada.',
    icon: 'mdi-headset',
    color: 'blue-darken-2',
  },
  {
    title: 'Traducción Automática',
    description: 'Herramientas como Google Translate usan LLMs para ofrecer traducciones más contextuales y precisas.',
    icon: 'mdi-translate',
    color: 'deep-purple-darken-2',
  },
  {
    title: 'Generación de Contenido',
    description: 'Crean artículos, guiones, publicaciones en redes sociales o textos educativos.',
    icon: 'mdi-text-box-edit',
    color: 'teal-darken-3',
  },
  {
    title: 'Asistencia a Programadores',
    description: 'Plataformas como GitHub Copilot sugieren y completan código en tiempo real.',
    icon: 'mdi-code-braces',
    color: 'cyan-darken-3',
  },
  {
    title: 'Análisis de Sentimientos',
    description: 'Empresas usan LLMs para entender la opinión del público en redes sociales.',
    icon: 'mdi-emoticon-happy-outline',
    color: 'purple-darken-3',
  },
  {
    title: 'Educación Personalizada',
    description: 'Adaptan el contenido al ritmo de aprendizaje de cada estudiante.',
    icon: 'mdi-school',
    color: 'pink-darken-3',
  },
]
</script>

<style scoped>
.v-card {
  transition: box-shadow 0.3s ease;
}
</style>
