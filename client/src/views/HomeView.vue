<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main class="md:mt-36 md:px-28 mt-10 px-6 text-[#353535]">
    <div class="flex flex-row">
      <div class="kiri">
        <div class="text-atas">
          <h1 class="text-5xl md:text-7xl font-extrabold">Donating is about</h1>
          <h1 class="text-5xl md:text-7xl font-extrabold">making</h1>
          <h1 class="text-5xl md:text-7xl font-extrabold">
            a
            <span class="text-blue-500">Difference.</span>
          </h1>
        </div>

        <div class="text-bawah mt-20">
          <h1 class="text-3xl md:text-3xl font-extrabold">
            We care about the world
          </h1>
          <p class="mt-4 w-full md:w-1/2">
            We are a group of people who care about the world. We want to make
            the world a better place by helping those in need. We believe that
            everyone deserves a chance to live a better life. That's why we are
            here to help.
          </p>

          <button class="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-8">
            Donate Now
          </button>
        </div>
      </div>
      <div class="kanan hidden md:block">
        <img src="../../public/kanan-landing.svg" alt="kanan" />
      </div>
    </div>
  </main>
  <Footer class="mt-20" />
</template>
