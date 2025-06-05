<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-sheet elevation="6" class="pa-8 rounded-xl" color="indigo-lighten-5">
          <!-- Encabezado -->
          <v-row align="center" justify="center">
            <v-icon size="100" color="deep-purple-darken-3">mdi-brain</v-icon>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <h1 class="text-h4 font-weight-bold mb-4">Bienvenido al OVA de Inteligencia Artificial</h1>
              <p class="text-body-1">
                Este entorno virtual de aprendizaje está diseñado para introducirte al fascinante mundo de la IA,
                enfocándonos en los Modelos de Lenguaje de Gran Tamaño (LLMs), su arquitectura, aplicaciones, y ejemplos reales.
                Explora a tu ritmo cada módulo desde el menú lateral.
              </p>
            </v-col>
          </v-row>

          <!-- Chips alusivos a la IA -->
          <v-row justify="center" class="my-6">
            <v-chip class="ma-2" color="purple-lighten-3" variant="elevated">Transformers</v-chip>
            <v-chip class="ma-2" color="green-lighten-3" variant="elevated">Procesamiento de Lenguaje Natural</v-chip>
            <v-chip class="ma-2" color="blue-lighten-3" variant="elevated">Asistentes Virtuales</v-chip>
            <v-chip class="ma-2" color="red-lighten-3" variant="elevated">Generación de Texto</v-chip>
            <v-chip class="ma-2" color="orange-lighten-3" variant="elevated">Evaluaciones Interactivas</v-chip>
          </v-row>

          <!-- Banner Ilustrativo -->
          <v-row justify="center" class="my-8">
            <v-img
              src="https://cdn.openai.com/labs/images/thumbnail-4.jpg"
              alt="IA Visual"
              max-width="700"
              class="rounded-lg elevation-4"
              cover
            ></v-img>
          </v-row>

          <!-- Cita inspiradora -->
          <v-row justify="center" class="mt-10">
            <v-col cols="12" class="text-center">
              <blockquote class="text-subtitle-1 italic text-grey-darken-2">
                “La inteligencia artificial no es el futuro lejano, es el presente transformador.”
              </blockquote>
            </v-col>
          </v-row>

         
         
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No se necesita lógica aquí, ya que es solo presentación
</script>

<style scoped>
blockquote {
  quotes: "“" "”";
  padding: 0 1rem;
}
</style>