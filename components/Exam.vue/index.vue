<template>
  <v-container class="py-6">
    <v-card class="pa-4" elevation="5">
      <v-card-title class="text-h5 mb-4">Examen: Aplicaciones de LLMs</v-card-title>

      <v-form v-model="isValid">
        <div v-for="(question, index) in questions" :key="index" class="mb-6">
          <v-card class="pa-3" variant="outlined">
            <v-card-subtitle class="mb-2">
              {{ index + 1 }}. {{ question.text }}
            </v-card-subtitle>
            <v-radio-group v-model="userAnswers[index]" :mandatory="true">
              <v-radio
                v-for="(option, idx) in question.options"
                :key="idx"
                :label="option"
                :value="option"
              />
            </v-radio-group>
          </v-card>
        </div>

        <v-btn color="primary" class="mt-4" @click="submitExam">Enviar respuestas</v-btn>
      </v-form>

      <v-alert
        v-if="showResult"
        :type="score >= 3 ? 'success' : 'error'"
        class="mt-4"
        border="start"
        elevation="2"
      >
        Obtuviste {{ score }} de {{ questions.length }} respuestas correctas.
      </v-alert>
    </v-card>
  </v-container>
</template>

<script setup>


const isValid = ref(false)
const showResult = ref(false)
const score = ref(0)

const userAnswers = ref([])

const questions = [
  {
    text: '¿Qué arquitectura utilizan los LLMs?',
    options: ['RNN', 'Transformer', 'CNN', 'LSTM'],
    correct: 'Transformer',
  },
  {
    text: '¿Cuál es una aplicación común de los LLMs?',
    options: [
      'Clasificación de imágenes',
      'Predicción del clima',
      'Generación de texto',
      'Reconocimiento facial',
    ],
    correct: 'Generación de texto',
  },
  {
    text: '¿Qué ventaja principal tienen los Transformers sobre las RNN?',
    options: [
      'Consumen menos energía',
      'Procesan texto en paralelo',
      'No requieren entrenamiento',
      'Son más pequeños',
    ],
    correct: 'Procesan texto en paralelo',
  },
  {
    text: '¿Cuál de estas herramientas usa LLMs?',
    options: ['Photoshop', 'Excel', 'ChatGPT', 'PowerPoint'],
    correct: 'ChatGPT',
  },
]

const submitExam = () => {
  score.value = userAnswers.value.reduce((acc, answer, idx) => {
    return answer === questions[idx].correct ? acc + 1 : acc
  }, 0)
  showResult.value = true
}
</script>
