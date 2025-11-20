<template>
  <nav
    class="relative w-full p-4 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 shadow-xl flex justify-between items-center text-white">
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-white/30"></div>

    <h1 class="text-3xl font-bold relative">
      ChezzyBite
    </h1>

    <div class="hidden md:flex gap-8 relative">
      <router-link to="/" class="hover:text-yellow-200 transition">Home</router-link>
      <router-link to="/About" class="hover:text-yellow-200 transition">About</router-link>
      <router-link to="/Menu" class="hover:text-yellow-200 transition">Menu</router-link>
      <router-link to="/Contact" class="hover:text-yellow-200 transition">Contact</router-link>
      <router-link to="/Order" class="hover:text-yellow-200 transition font-semibold">
        Order Now
      </router-link>
    </div>

    <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none z-20">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen"
        class="absolute top-full left-0 w-full bg-orange-500/95 backdrop-blur-md shadow-lg md:hidden flex flex-col gap-4 px-6 py-6 text-lg z-10">
        <router-link @click="close" to="/" class="hover:text-yellow-200 transition">Home</router-link>
        <router-link @click="close" to="/About" class="hover:text-yellow-200 transition">About</router-link>
        <router-link @click="close" to="/Menu" class="hover:text-yellow-200 transition">Menu</router-link>
        <router-link @click="close" to="/contact" class="hover:text-yellow-200 transition">Contact</router-link>
        <router-link @click="close" to="/Order" class="hover:text-yellow-200 transition font-semibold">
          Order Now
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const close = () => (isOpen.value = false)
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
