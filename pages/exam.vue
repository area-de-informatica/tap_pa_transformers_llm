<template>
  <div>
    <Exam
      :initial-index="initialIndex"
      @submit-answer="handleSubmitAnswer"
      @next-question="handleNextQuestion"
      @complete-exam="handleCompleteExam"
      @reset-exam="handleResetExam"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Exam from '~/components/Exam.vue/index.vue';
import { useStoreQuestion } from '@/stores/question';

const store = useStoreQuestion();
const initialIndex = ref(0);

onMounted(async () => {
  await store.fetchQuestions();
});

function handleSubmitAnswer(answer) {
  console.log('Respuesta enviada:', answer);
}

function handleNextQuestion() {
  console.log('Siguiente pregunta');
}

function handleCompleteExam() {
  console.log('Examen completado');
}

function handleResetExam() {
  console.log('Examen reiniciado');
}
</script>