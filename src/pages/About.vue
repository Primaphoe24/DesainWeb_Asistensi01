<template>

  <div class="home-wrapper w-full min-h-screen bg-linear-to-b from-orange-100 via-orange-50 to-white">
    <Navbar />

    <section class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-6 items-center" v-intersect>
      <img src="/images/about1.jpg" class="rounded-xl shadow-xl object-cover w-full h-80" />

      <div>
        <h1 class="text-4xl font-semibold tracking-wide">About CheezyBite</h1>
        <p class="text-gray-600 leading-relaxed text-sm">
          CheezyBite adalah brand restoran cepat saji yang menghadirkan cita rasa pizza,
          kebab, burger premium dengan sentuhan keju leleh khas kami...
        </p>
      </div>

    </section>

    <section class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-6 items-center" v-intersect>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Visi</h2>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Menjadi restoran keju terbaik di Indonesia dengan menciptakan pengalaman bersantap modern, hangat, dan penuh
          rasa.
        </p>
      </div>

      <img src="/images/about2.jpg" class="rounded-xl shadow-xl object-cover w-full h-80" />
    </section>

    <section class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-6 items-center" v-intersect>
      <img src="/images/about3.jpg" class="rounded-xl shadow-xl object-cover w-full h-80" />

      <div>
        <h2 class="text-2xl font-semibold mb-3">Misi</h2>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Kami hadir dengan komitmen untuk menjadi brand kuliner keju terbaik di Indonesia.
        </p>

        <ul class="list-disc ml-5 text-gray-600 space-y-2 text-sm">
          <li>Menghadirkan inovasi pizza, kebab, dan burger berkeju yang premium</li>
          <li>Memberikan pelayanan ramah dan pengalaman menyenangkan</li>
          <li>Menjaga kualitas tinggi dan kebersihan terbaik</li>
        </ul>
      </div>
    </section>

    <section class="max-w-6xl mx-auto py-16 px-6" v-intersect>

      <h2 class="text-3xl font-semibold text-center mb-10">Mengapa CheezyBite Berbeda?</h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition" v-intersect>
          <img src="/images/cheeseicon.jpg" class="w-16 mx-auto mb-4 opacity-90" />
          <h3 class="font-semibold text-lg mb-2">Keju Premium Signature</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Semua menu kami dibuat dengan keju premium racikan khusus yang menciptakan rasa gurih, creamy, dan lumer
            sempurna.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition" v-intersect>
          <img src="/images/cheficon.jpg" class="w-16 mx-auto mb-4 opacity-90" />
          <h3 class="font-semibold text-lg mb-2">Resep Terinspirasi Chef Berpengalaman</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Setiap hidangan diracik oleh tim yang mengutamakan kualitas, cita rasa, serta teknik memasak terbaik.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition" v-intersect>
          <img src="/images/loveicon.jpg" class="w-16 mx-auto mb-4 opacity-90" />
          <h3 class="font-semibold text-lg mb-2">Pengalaman Bersantap yang Hangat</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            CheezyBite mengutamakan suasana restoran yang nyaman, ramah keluarga, dan menyenangkan untuk semua kalangan.
          </p>
        </div>

      </div>

    </section>

    <section class="max-w-5xl mx-auto py-20 px-6" v-intersect>

      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold">Perjalanan CheezyBite</h2>
        <p class="text-gray-600 mt-3 text-sm max-w-3xl mx-auto leading-relaxed">
          Setiap gigitan memiliki cerita. CheezyBite tidak hanya lahir dari dapur,
          tetapi dari passion untuk menghadirkan keju terbaik yang membuat siapa pun tersenyum.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">

        <img src="/images/story.jpg" class="rounded-xl shadow-xl object-cover w-full h-80" v-intersect />

        <div v-intersect>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Berawal dari resep sederhana yang dicoba di dapur kecil, CheezyBite kini berkembang menjadi
            brand kuliner yang mengutamakan kualitas dan rasa otentik.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Dengan memadukan cita rasa keju leleh khas kami, bahan segar pilihan, serta teknik memasak modern.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            Dari pizza, kebab, hingga burger premium:
            <span class="font-semibold">memberikan gigitan terbaik untuk hari yang lebih ceria.</span>
          </p>
        </div>

      </div>

    </section>

    <section class="max-w-6xl mx-auto py-16 px-6" v-intersect>
      <h2 class="text-3xl font-semibold text-center mb-10">Cabang Kami</h2>

      <div class="grid md:grid-cols-2 gap-8">

        <div class="bg-white p-6 rounded-xl shadow-lg" v-intersect>
          <h3 class="text-xl font-semibold mb-2">CheezyBite Balikpapan</h3>
          <p class="text-gray-600 text-sm mb-4">Jl. Sinar Mas Land Boulevard, Balikpapan</p>

          <iframe class="rounded-lg w-full h-64 md:h-72 lg:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9163506024165!2d116.87640587423257!3d-1.2183308355540805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1471e336501d5%3A0xd28d1bbbb6af3e49!2sGrand%20City%20Balikpapan!5e0!3m2!1sid!2sid!4v1763507051339!5m2!1sid!2sid"
            allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg" v-intersect>
          <h3 class="text-xl font-semibold mb-2">CheezyBite Samarinda</h3>
          <p class="text-gray-600 text-sm mb-4">Jl. P. Suryanata No. 1-75, Samarinda</p>

          <iframe class="rounded-lg w-full h-64 md:h-72 lg:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.7854886645002!2d117.12528890217999!3d-0.48171639221128343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67edf5e7b6b69%3A0x1a7a6f8cca7a5664!2sJl.%20P.%20Suryanata%20No.175%2C%20Air%20Putih%2C%20Kec.%20Samarinda%20Ulu%2C%20Kota%20Samarinda%2C%20Kalimantan%20Timur%2075243!5e0!3m2!1sid!2sid!4v1763506976090!5m2!1sid!2sid"
            allowfullscreen="" loading="lazy"></iframe>
        </div>

      </div>
    </section>

    <Footer />
  </div>

</template>


<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import intersect from "../directives/intersect.js";

defineOptions({
  directives: {
    intersect,
  },
});
</script>
