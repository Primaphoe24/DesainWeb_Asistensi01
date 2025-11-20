<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <img src="@/assets/images/foodifylogo.jpg" alt="Logo" class="w-20 h-20 object-contain mb-4" />
        <h3 class="text-xl font-bold text-white">ChezzyBite</h3>
        <p class="mt-4 text-gray-400 leading-relaxed">
          Fast. Fresh. Future-Ready. ChezzyBite brings tasty food, friendly service, and a smooth experience you can
          always count on.
        </p>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-white">Home</router-link></li>
          <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
          <li><a href="#" class="hover:text-white">Services</a></li>
          <li><a href="#" class="hover:text-white">About Us</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Contact Info</h3>
        <ul class="space-y-2">
          <li class="flex gap-2">
            🏙️ <span>Jl. Sinar Mas Land Boulevard, Balikpapan</span>
          </li>
          <li class="flex gap-2">
            📞 <span>+62 812-3456-7890</span>
          </li>
          <li class="flex gap-2">
            ✉️ <span>support@ChezzyBitefastfood.com</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div class="flex gap-4 text-2xl">
          <a href="#" class="hover:text-white transition">
            <i class="ri-facebook-box-fill"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="ri-linkedin-box-fill"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-500 mt-16 border-t border-gray-700 pt-8">
      © 2025 ChezzyBite. All Rights Reserved.
    </div>
  </footer>
</template>
