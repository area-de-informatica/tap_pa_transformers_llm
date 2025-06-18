<script setup>
import { computed, watch, onMounted } from 'vue'

// 📝 PROPS
const props = defineProps({
  question: {
    type: Object,
    required: true,
    validator: (value) =>
      value.text &&
      (Array.isArray(value.options) || value.options === undefined) &&
      value.correct !== undefined,
  },
  questionTitle: { type: String, default: 'Pregunta' },
  difficulty: {
    type: String,
    default: 'Medio',
    validator: (value) => ['Fácil', 'Medio', 'Difícil'].includes(value),
  },
  headerGradient: { type: String, default: 'linear-gradient(135deg, #667eea, #764ba2)' },
  showFeedback: { type: Boolean, default: true },
  showNextButton: { type: Boolean, default: true },
  nextButtonText: { type: String, default: 'Siguiente' },
  allowRetry: { type: Boolean, default: false },
  initialAnswer: { type: Number, default: null },
})

// 🔄 V-MODEL
const selectedAnswer = defineModel('selectedAnswer', {
  type: Number,
  default: null
})

const isAnswered = defineModel('isAnswered', {
  type: Boolean,
  default: false
})

// 📡 EMITS
const emit = defineEmits([
  'answer-submitted',
  'answer-changed',
  'next-question',
  'retry-question',
  'question-completed'
])

// 💡 COMPUTED
const isCorrect = computed(() => selectedAnswer.value === props.question.correct)

const difficultyColor = computed(() => {
  const colors = { 'Fácil': 'success', 'Medio': 'warning', 'Difícil': 'error' }
  return colors[props.difficulty] || 'primary'
})

const feedbackTitle = computed(() => (isCorrect.value ? '¡Correcto! 🎉' : 'Incorrecto 😔'))

// 🎨 METHODS
const getOptionColor = (index) => {
  const colors = ['primary', 'success', 'warning', 'error']
  return colors[index % colors.length]
}

const onAnswerChange = (value) => {
  emit('answer-changed', {
    questionId: props.question.id,
    selectedAnswer: value,
    isCorrect: value === props.question.correct
  })
}

const submitAnswer = () => {
  if (selectedAnswer.value === null) return
  isAnswered.value = true

  const result = {
    questionId: props.question.id,
    selectedAnswer: selectedAnswer.value,
    correctAnswer: props.question.correct,
    isCorrect: isCorrect.value,
    timestamp: new Date().toISOString()
  }

  emit('answer-submitted', result)
  emit('question-completed', result)
}

const goToNext = () => {
  emit('next-question', {
    questionId: props.question.id,
    wasCorrect: isCorrect.value
  })
}

const retryQuestion = () => {
  selectedAnswer.value = null
  isAnswered.value = false
  emit('retry-question', { questionId: props.question.id })
}

// ⚡ Sincronizar initialAnswer al inicio y si cambia
onMounted(() => {
  if (props.initialAnswer !== null) {
    selectedAnswer.value = props.initialAnswer
  }
})

watch(() => props.initialAnswer, (newValue) => {
  if (newValue !== null) {
    selectedAnswer.value = newValue
  }
})
</script>
