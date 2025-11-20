<template>
  <div class="home-wrapper w-full min-h-screen bg-linear-to-b from-orange-100 via-orange-50 to-white">

    <Navbar />

    <div class="home-container w-full">

      <div class="max-w-5xl mx-auto px-4">
        <section class="hero relative w-full rounded-xl overflow-hidden mt-6 h-35 md:h-50">

          <div class="absolute inset-0 w-full h-full transition-all duration-700" :class="slideAnimation">
            <img :src="slides[currentSlide]" class="w-full h-full object-cover" />
          </div>

          <div class="
  absolute top-0 left-0 h-full  
  w-[50%]         
  sm:w-[45%]
  md:w-[35%]
  lg:max-w-[360px]
  bg-orange-500 bg-opacity-90 
  flex flex-col justify-center 
  p-6 rounded-r-xl text-white
">

            <h1 class="text-3xl font-bold leading-tight">Nikmati<br />lezatnya</h1>
            <router-link to="/Order" class="hover:text-yellow-200 transition">Pesan sekarang</router-link>
          </div>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span v-for="(s, i) in slides" :key="i" class="w-3 h-3 rounded-full"
              :class="i === currentSlide ? 'bg-white' : 'bg-white/40'"></span>
          </div>
        </section>
      </div>

      <div class="mt-10 text-center text-lg font-semibold">Our Favorite Menu</div>
      <div class="flex justify-center mt-1">
        <div class="w-40 h-1 bg-orange-500 rounded-full"></div>
      </div>

      <section class="menu-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 px-4">
        <div v-for="item in menuItems" :key="item.id" class="bg-white rounded-xl shadow-lg p-3 cursor-pointer 
       transition-all duration-300 
       hover:-translate-y-2 hover:shadow-2xl animate-[float_4s_ease-in-out_infinite]
">
          <div class="relative">
            <img :src="item.img" class="rounded-xl w-full aspect-4/3 object-cover" />

            <span class="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
              ❤️
            </span>
          </div>

          <h3 class="mt-3 font-semibold text-sm">{{ item.title }}</h3>

          <div class="flex justify-between items-center mt-1">
            <p class="text-xs text-gray-500">{{ item.category }}</p>
            <p class="font-bold">&{{ item.price }}</p>
          </div>
        </div>
      </section>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getAudio } from "../audio.js";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";


const slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const currentSlide = ref(0);
const slideAnimation = ref("opacity-0 translate-x-5");

let slideInterval = null;

const enableSound = () => {
  const audio = getAudio();

  if (audio.paused) {
    audio.play().catch(() => { });
  }

  let v = audio.volume;
  const fade = setInterval(() => {
    if (v < 0.95) {
      v += 0.05;
      audio.volume = v;
    } else {
      audio.volume = 1;
      clearInterval(fade);
    }
  }, 100);

  window.removeEventListener("click", enableSound);
  window.removeEventListener("touchstart", enableSound);
  window.removeEventListener("scroll", enableSound);
};

onMounted(() => {

  setTimeout(() => {
    slideAnimation.value = "opacity-100 translate-x-0";
  }, 50);

  slideInterval = setInterval(() => {
    slideAnimation.value = "opacity-0 -translate-x-5";

    setTimeout(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length;
      slideAnimation.value = "opacity-100 translate-x-0";
    }, 300);
  }, 3000);

  const audio = getAudio();
  audio.volume = 0;

  window.addEventListener("click", enableSound);
  window.addEventListener("touchstart", enableSound);
  window.addEventListener("scroll", enableSound);
});

onBeforeUnmount(() => {
  clearInterval(slideInterval);
});

const menuItems = ref([
  { id: 1, title: "Panera Soup", category: "Fast-Food", price: 39, img: "/src/assets/images/food1.jpg" },
  { id: 2, title: "Cheezy Pizza", category: "Italian", price: 49, img: "/src/assets/images/food2.jpg" },
  { id: 3, title: "Noodle’s Special", category: "Asian", price: 29, img: "/src/assets/images/food3.jpg" },
  { id: 4, title: "Burger King Set", category: "Fast-Food", price: 45, img: "/src/assets/images/food4.jpg" },
  { id: 5, title: "Hot Chicken Wings", category: "American", price: 32, img: "/src/assets/images/food5.jpg" },
  { id: 6, title: "Beef Steak Plate", category: "Steak House", price: 59, img: "/src/assets/images/food6.jpg" },
]);
</script>
