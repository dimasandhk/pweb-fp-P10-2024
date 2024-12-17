<script></script>

<style>
.custom-shadow {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <div
    class="flex flex-col lg:flex-row gap-y-8 lg:gap-x-40 mt-16 lg:mt-32 items-center"
  >
    <div class="px-8 lg:px-36">
      <img
        src="../../public/logo-wcare.svg"
        alt="logo"
        class="max-w-full h-auto"
      />
    </div>

    <div
      class="px-8 lg:px-36 py-14 border-2 rounded-xl w-full lg:w-auto custom-shadow"
    >
      <h1 class="text-4xl font-extrabold mb-8">Sign in to Continue</h1>
      <form>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" for="email"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            id="email"
            type="email"
            placeholder="Masukkan email kamu"
            class="w-full border-[1px] border-zinc-500 px-3 py-2 rounded-xl"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" for="password"
            >Password <span class="text-red-500">*</span></label
          >
          <input
            id="password"
            type="password"
            placeholder="Masukkan password kamu"
            class="w-full border-[1px] border-zinc-500 px-3 py-2 rounded-xl"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
