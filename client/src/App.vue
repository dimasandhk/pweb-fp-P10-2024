<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-md py-6 px-10 flex justify-between items-center">
    <div class="flex items-center">
      <img src="../public/wcare.svg" alt="wcare" class="h-8 mr-4" />
    </div>
    <div class="hidden sm:flex flex-1 justify-center space-x-4">
      <RouterLink to="/" class="text-gray-700 hover:text-blue-500 font-bold"
        >Home</RouterLink
      >
      <RouterLink to="/news" class="text-gray-700 hover:text-blue-500 font-bold"
        >News</RouterLink
      >
      <RouterLink
        to="/crowdfund"
        class="text-gray-700 hover:text-blue-500 font-bold"
        >Crowdfund</RouterLink
      >
    </div>
    <div class="hidden sm:flex items-center space-x-4">
      <RouterLink to="/login">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </RouterLink>
    </div>
    <div class="sm:hidden">
      <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </nav>

  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden transition-opacity duration-300 ease-in-out"
    :class="{ 'opacity-100': isMenuOpen, 'opacity-0': !isMenuOpen }"
    @click="toggleMenu"
  ></div>

  <div
    class="fixed top-0 right-0 w-full h-full bg-white shadow-md z-50 sm:hidden transform transition-transform duration-300 ease-in-out"
    :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
  >
    <div class="px-10 py-6 flex justify-between items-center border-b">
      <img src="../public/wcare.svg" alt="wcare" class="h-8" />
      <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="px-8 py-6 space-y-4">
      <RouterLink
        to="/"
        class="block text-gray-700 hover:text-blue-500"
        @click="toggleMenu"
        >Home</RouterLink
      >
      <RouterLink
        to="/news"
        class="block text-gray-700 hover:text-blue-500"
        @click="toggleMenu"
        >News</RouterLink
      >
      <RouterLink
        to="/crowdfund"
        class="block text-gray-700 hover:text-blue-500 font-bold"
        @click="toggleMenu"
        >Crowdfund</RouterLink
      >
      <RouterLink to="/login" class="block">
        <button
          class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          @click="toggleMenu"
        >
          Login
        </button>
      </RouterLink>
    </div>
  </div>

  <RouterView />
</template>
