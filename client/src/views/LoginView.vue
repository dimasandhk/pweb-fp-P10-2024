<script>
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Toaster,
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Login success!");
        setTimeout(() => {
          localStorage.setItem("token", data.data.token);
          this.$router.push("/");
        }, 1000);
      }
    },
  },
};
</script>

<style>
.custom-shadow {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <Toaster />
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
      <form @submit="handleSubmit">
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" for="email"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            id="email"
            type="email"
            placeholder="Masukkan email kamu"
            class="w-full border-[1px] border-zinc-500 px-3 py-2 rounded-xl"
            v-model="email"
            required
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
            v-model="password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-400 text-white px-4 py-2 rounded-xl hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
