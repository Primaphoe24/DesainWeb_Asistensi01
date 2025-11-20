<template>
  <div class="relative overflow-hidden">

    <div ref="bg" class="absolute inset-0 bg-cover bg-center -z-10"
      style="background-image: url('/images/contact-bg.jpg');"></div>

    <Navbar />

    <div class="w-full min-h-screen py-16 px-4 md:px-10 lg:px-20 bg-black/40">
      <h1 class="text-4xl font-bold text-white mb-10 text-center">
        Contact With Us
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div class="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.53422002222!2d116.78591251373288!3d-1.1365383505880828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1461733527559%3A0x16d4428419f89f0c!2sJl.%20Grand%20City%20Balikpapan%2C%20Batu%20Ampar%2C%20Kec.%20Balikpapan%20Utara%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076114!5e0!3m2!1sen!2sid!4v1763086749333!5m2!1sen!2sid"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="flex flex-col justify-center bg-orange-50 rounded-xl p-8 shadow-md">
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Foodify is a modern fast-food brand focused on serving tasty meals,
            quick service, and a smooth customer experience you can rely on every day.
          </p>

          <div class="flex items-start gap-4 mb-6">
            <div class="bg-orange-500 text-white p-3 rounded-lg">📞</div>
            <div>
              <p class="font-semibold text-gray-700">Have Any Question?</p>
              <p class="text-xl font-bold text-orange-600">+62 812-3456-7890</p>
            </div>
          </div>

          <div class="flex items-start gap-4 mb-6">
            <div class="bg-orange-500 text-white p-3 rounded-lg">✉️</div>
            <div>
              <p class="font-semibold text-gray-700">Send Email</p>
              <p class="text-lg text-gray-800">cs@foodifyfastfood.co.id</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-orange-500 text-white p-3 rounded-lg">🏙️</div>
            <div>
              <p class="font-semibold text-gray-700">Office Address</p>
              <p class="text-gray-800">
                Jl. Grandy City, Kec. Balikpapan Utara<br />
                Kota Balikpapan, Kalimantan Timur
              </p>
              <a href="https://maps.google.com" target="_blank" class="text-orange-600 mt-2 inline-block underline">
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

gsap.registerPlugin(ScrollTrigger);

const bg = ref(null);

onMounted(() => {
  gsap.to(bg.value, {
    y: 150,
    ease: "none",
    scrollTrigger: {
      trigger: bg.value,
      scrub: true,
    }
  });
});
</script>
