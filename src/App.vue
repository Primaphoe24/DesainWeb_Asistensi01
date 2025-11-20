<template>
  <div class="app-wrapper relative">
    <MusicButton />
    <router-view />
  </div>
</template>

<script setup>
import MusicButton from './components/MusicButton.vue'
</script>

<style>
.app-wrapper {
  min-height: 100vh;
}
</style>
