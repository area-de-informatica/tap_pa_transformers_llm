<template>
  <div class="credits-dreamcore-bg">
    <!-- Background simplificado -->
    <div class="bg-magic">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="dream-grid"></div>
    </div>

    <v-container class="content-wrapper pa-6">
      <!-- Header -->
      <v-card class="header-card dreamcore-card mb-6" elevation="8">
        <v-card-text class="pa-6 text-center">
          <div class="d-flex align-center justify-center mb-4">
            <v-icon size="48" color="primary" class="pulse-icon mr-4">mdi-account-group</v-icon>
            <div>
              <h1 class="text-h3 font-weight-black gradient-title">
                🏆 CRÉDITOS DEL PROYECTO 🏆
              </h1>
              <p class="text-h6 subtitle-magic">
                ✨ Reconociendo a quienes hicieron posible esta plataforma ✨
              </p>
            </div>
          </div>
          
          <!-- Project Image Section -->
          <div v-if="creditsStore.projectInfo.image" class="project-image-section mb-4">
            <v-card class="project-image-card" elevation="4">
              <v-img
                :src="creditsStore.projectInfo.image"
                :alt="creditsStore.projectInfo.title"
                height="300"
                cover
                class="project-main-image"
              >
                <div class="image-overlay">
                  <h3 class="text-h5 font-weight-bold text-white mb-2">
                    {{ creditsStore.projectInfo.title }}
                  </h3>
                  <p class="text-subtitle-1 text-white">
                    {{ creditsStore.projectInfo.description }}
                  </p>
                </div>
              </v-img>
            </v-card>
          </div>
          
          <div class="project-stats">
            <v-chip class="ma-1 magical-chip">
              👥 {{ creditsStore.totalTeamMembers }} Colaboradores
            </v-chip>
            <v-chip class="ma-1 magical-chip">
              🛠️ {{ creditsStore.totalTechnologies }} Tecnologías
            </v-chip>
          </div>
        </v-card-text>
      </v-card>

      <!-- Loading State -->
      <div v-if="creditsStore.loading" class="text-center py-8 loading-magic">
        <div class="magical-loader mb-4">
          <v-progress-circular indeterminate color="primary" size="48" class="rainbow-spinner"></v-progress-circular>
        </div>
        <p class="text-h6 gradient-text">🌟 Cargando créditos... 🌟</p>
      </div>

      <!-- Error State -->
      <v-alert v-if="creditsStore.error" type="error" class="mb-6">
        {{ creditsStore.error }}
      </v-alert>

      <!-- Team Section -->
      <v-card v-if="!creditsStore.loading" class="mb-6 dreamcore-card team-glow" elevation="6">
        <div class="team-header">
          <div class="d-flex align-center pa-4">
            <v-icon size="32" color="white" class="mr-3">mdi-account-multiple</v-icon>
            <h2 class="text-h5 font-weight-bold text-white">👨‍💻 EQUIPO DE DESARROLLO</h2>
          </div>
        </div>
        
        <v-card-text class="pa-6">
          <v-row>
            <v-col
              v-for="member in creditsStore.team"
              :key="member.id"
              cols="12"
              md="6"
              lg="3"
            >
              <v-card class="team-card magical-card h-100" elevation="4">
                <v-card-text class="text-center pa-4">
                  <v-avatar size="100" class="mb-3 team-avatar">
                    <v-img :src="member.avatar" :alt="member.name"></v-img>
                  </v-avatar>
                  
                  <h3 class="text-h6 font-weight-bold mb-2">{{ member.name }}</h3>
                  <p class="text-subtitle-1 text-primary font-weight-medium mb-2">{{ member.role }}</p>
                  <p class="text-body-2 text-grey-darken-1 mb-3">{{ member.bio }}</p>
                  
                  <!-- Contributions -->
                  <div class="mb-3">
                    <v-chip
                      v-for="contribution in member.contributions"
                      :key="contribution"
                      size="small"
                      class="ma-1"
                      color="primary"
                      variant="tonal"
                    >
                      {{ contribution }}
                    </v-chip>
                  </div>
                  
                  <!-- Social Links -->
                  <div class="social-links">
                    <v-btn
                      v-for="(url, platform) in member.social"
                      :key="platform"
                      :href="url"
                      target="_blank"
                      icon
                      size="small"
                      class="ma-1 social-btn"
                    >
                      <v-icon>{{ getSocialIcon(platform) }}</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Technologies Section -->
      <v-card v-if="!creditsStore.loading" class="mb-6 dreamcore-card tech-glow" elevation="6">
        <div class="tech-header">
          <div class="d-flex align-center pa-4">
            <v-icon size="32" color="white" class="mr-3">mdi-cog</v-icon>
            <h2 class="text-h5 font-weight-bold text-white">🛠️ TECNOLOGÍAS UTILIZADAS</h2>
          </div>
        </div>
        
        <v-card-text class="pa-6">
          <v-row>
            <v-col
              v-for="tech in creditsStore.technologies"
              :key="tech.name"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="tech-card magical-card h-100" elevation="3">
                <v-card-text class="text-center pa-4">
                  <div class="tech-icon mb-3">{{ tech.icon }}</div>
                  <h4 class="text-h6 font-weight-bold mb-1">{{ tech.name }}</h4>
                  <p class="text-caption text-grey mb-2">v{{ tech.version }}</p>
                  <p class="text-body-2 mb-3">{{ tech.description }}</p>
                  <v-chip size="small" :color="getCategoryColor(tech.category)" variant="tonal">
                    {{ tech.category }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCreditsStore } from '../stores/credits'

const creditsStore = useCreditsStore()

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: 'mdi-linkedin',
    github: 'mdi-github',
    twitter: 'mdi-twitter',
    dribbble: 'mdi-dribbble'
  }
  return icons[platform] || 'mdi-web'
}

const getCategoryColor = (category) => {
  const colors = {
    'Frontend': 'blue',
    'Backend': 'green',
    'UI Framework': 'purple',
    'State Management': 'orange',
    'AI/ML': 'red'
  }
  return colors[category] || 'grey'
}

// Ensure hooks are called at the top level
onMounted(() => {
  creditsStore.fetchCreditsData()
})
</script>

<style scoped>
/* Background simplificado */
.credits-dreamcore-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffeef8 0%, #e8f4fd 50%, #f0f8ff 100%);
  position: relative;
  overflow: hidden;
}

.bg-magic {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  animation: bubbleFloat 15s infinite ease-in-out;
}

.bubble-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 10%;
  background: radial-gradient(circle, rgba(103, 58, 183, 0.2), rgba(103, 58, 183, 0.05));
}

.bubble-2 {
  width: 100px;
  height: 100px;
  top: 70%;
  right: 15%;
  background: radial-gradient(circle, rgba(233, 30, 99, 0.2), rgba(233, 30, 99, 0.05));
  animation-delay: -5s;
}

.bubble-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 60%;
  background: radial-gradient(circle, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.05));
  animation-delay: -10s;
}

@keyframes bubbleFloat {
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
  50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
}

.dream-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(103, 58, 183, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 58, 183, 0.06) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 25s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Content */
.content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.dreamcore-card {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(103, 58, 183, 0.15);
}

.gradient-title {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: titleShimmer 3s ease-in-out infinite;
}

@keyframes titleShimmer {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}

.subtitle-magic {
  color: #64748b;
  font-weight: 500;
}

.pulse-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.magical-chip {
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  color: white !important;
  font-weight: bold;
}

/* Headers */
.team-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.tech-header {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* Cards */
.team-card, .tech-card {
  transition: all 0.4s ease;
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
}

.magical-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(103, 58, 183, 0.3);
}

.team-avatar {
  border: 3px solid rgba(103, 58, 183, 0.3);
  transition: all 0.3s ease;
}

.team-avatar:hover {
  border-color: #667eea;
  transform: scale(1.05);
}

.tech-icon {
  font-size: 3rem;
  transition: transform 0.3s ease;
}

.tech-card:hover .tech-icon {
  transform: scale(1.1);
}

.social-btn {
  background: rgba(103, 58, 183, 0.1) !important;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: rgba(103, 58, 183, 0.3) !important;
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 960px) {
  .bubble { display: none; }
  .dream-grid { background-size: 30px 30px; }
}

@media (max-width: 600px) {
  .content-wrapper { padding: 16px 8px; }
  .gradient-title { font-size: 2rem !important; }
  .tech-icon { font-size: 2rem; }
}

/* Project Image Styles */
.project-image-section {
  max-width: 800px;
  margin: 0 auto;
}

.project-image-card {
  border-radius: 20px !important;
  overflow: hidden;
  position: relative;
}

.project-main-image {
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.project-image-card:hover .project-main-image {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  text-align: center;
}

@media (max-width: 600px) {
  .image-overlay {
    padding: 1rem;
  }
  
  .image-overlay h3 {
    font-size: 1.2rem !important;
  }
  
  .image-overlay p {
    font-size: 0.9rem !important;
  }
}
</style>
