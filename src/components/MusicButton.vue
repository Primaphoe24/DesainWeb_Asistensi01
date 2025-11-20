<template>
  <button @click="toggleMusic"
    class="fixed bottom-5 right-5 w-14 h-14 rounded-full shadow-lg bg-white flex items-center justify-center z-50">
    <img src="/logo.png" :class="[
      'w-10 h-10 rounded-full object-cover transition-all',
      isPlaying ? 'animate-spin-slow' : ''
    ]" :key="isPlaying" alt="music-icon" />
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAudio } from "../audio.js";

const audio = getAudio();
const isPlaying = ref(false);

onMounted(() => {
  isPlaying.value = !audio.paused;

  audio.onplay = () => (isPlaying.value = true);
  audio.onpause = () => (isPlaying.value = false);
});

function toggleMusic() {
  if (audio.paused) audio.play();
  else audio.pause();
}
</script>

<style>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
