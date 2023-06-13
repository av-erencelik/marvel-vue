<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />

  <main class="content"><RouterView /></main>
</template>

<style scoped lang="scss">
.content {
  padding-top: $navbar-height;
}
</style>
