<template>
  <v-container>
    <h2>Ejemplos de IA con LLMs</h2>

    <div v-if="storeIa.llmExamples.length > 0">
 <v-row>
 <v-col
 v-for="example in storeIa.llmExamples"
 :key="example.name"
 cols="12"
 sm="6"
 md="4"
 >
 <v-card>
 <v-img :src="example.imageUrl" height="200px" cover></v-img>
 <v-card-title>{{ example.name }}</v-card-title>
 <v-card-text>{{ example.description }}</v-card-text>
 <v-card-actions>
 <v-btn :href="example.url" target="_blank" color="primary">
            Ir al sitio
 </v-btn>
 </v-card-actions>
 </v-card>
 </v-col>
 </v-row>
    </div>
    <div v-else>
      Cargando ejemplos de IA...
    </div>


    <div v-if="storeIa.questions.length > 0">
      <h3>Preguntas cargadas desde el servidor:</h3>
      <ul>
        <li v-for="question in storeIa.questions" :key="question.pregunta">
          {{ question.pregunta }}
        </li>
      </ul>
    </div>


  </v-container>
</template>

<script setup>
import { useStoreIa } from '../stores/AItypes';
import { onMounted } from 'vue'; 

const storeIa = useStoreIa();

onMounted(() => {
  
  storeIa.fetchQuestions();
});
</script>

<style scoped>
</style>
