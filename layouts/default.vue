<template>
  <v-card>
    <v-layout>
      <!-- Barra de navegación superior -->
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-center">INTRODUCCIÓN A LLMS</v-toolbar-title>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Contenido principal -->
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  { title: 'Inicio', route: '/' },
  { title: 'LLMs', route: '/llms' },
  { title: 'Transformers', route: '/transformers' },
  { title: 'Ejemplos de IA', route: '/ia-examples' },
  { title: 'Aplicaciones', route: '/applications' },
  { title: 'Exam', route: '/exam' },
  { title: 'PLN', route: '/PLN' }
]
</script>
