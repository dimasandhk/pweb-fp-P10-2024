<script>
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
import Footer from "@/components/Footer.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    Footer,
    RouterLink,
    Toaster,
  },
  data() {
    return {
      nama: "",
      email: "",
      pesan: "",
      is_anonymous: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.nama,
          email: this.email,
          message: this.pesan,
          is_anonymous: this.is_anonymous,
        }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Feedback sent!");
        this.nama = "";
        this.email = "";
        this.pesan = "";
        this.is_anonymous = false;
      }
    },
  },
};
</script>

<template>
  <Toaster />
  <main class="md:mt-36 md:px-28 mt-10 px-6 text-[#353535]">
    <div class="flex flex-row">
      <div class="kiri">
        <div class="text-atas">
          <h1 class="text-5xl md:text-7xl font-extrabold">Donating is about</h1>
          <h1 class="text-5xl md:text-7xl font-extrabold">making</h1>
          <h1 class="text-5xl md:text-7xl font-extrabold">
            a
            <span class="text-blue-400">Difference.</span>
          </h1>
        </div>

        <div class="text-bawah mt-20">
          <h1 class="text-3xl md:text-3xl font-extrabold">
            We care about the world
          </h1>
          <p class="mt-4 w-full md:w-1/2 text-[#9a9a9a] font-bold">
            We are a group of people who care about the world. We want to make
            the world a better place by helping those in need. We believe that
            everyone deserves a chance to live a better life. That's why we are
            here to help.
          </p>

          <button class="bg-blue-400 text-white px-4 py-2 rounded-3xl mt-8">
            Donate Now
          </button>
        </div>
      </div>
      <div class="kanan hidden md:block">
        <img src="../../public/kanan-landing.svg" alt="kanan" />
      </div>
    </div>

    <section id="about" class="mt-40">
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-4xl text-[#353535] font-extrabold text-center">
          Be The <span class="text-blue-400">Change</span>
        </h3>
        <p class="text-lg mt-6 font-bold text-[#9a9a9a] text-center">
          We are a group of people who care about the world. We want to make the
          world a better place by helping those in need. We believe that
          everyone deserves a chance to live a better life. That's why we are
          here to help.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h4 class="text-2xl font-bold mb-4 text-blue-400">Help</h4>
          <p class="text-[#9a9a9a]">
            This is a description for the first card. It provides some
            information about the content of the card.
          </p>
          <button
            class="mt-4 text-blue-400 rounded-3xl border-2 border-blue-400 py-2 px-8"
          >
            Read More
          </button>
        </div>
        <div class="bg-blue-400 shadow-md rounded-lg p-6 text-center">
          <h4 class="text-2xl font-bold mb-4 text-white">Donation</h4>
          <p class="text-white">
            This is a description for the second card. It provides some
            information about the content of the card.
          </p>
          <button
            class="mt-4 text-white rounded-3xl border-2 border-white py-2 px-8"
          >
            Read More
          </button>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <h4 class="text-2xl font-bold mb-4 text-blue-400">Volunteer</h4>
          <p class="text-gray-700">
            This is a description for the third card. It provides some
            information about the content of the card.
          </p>
          <button
            class="mt-4 text-blue-400 rounded-3xl border-2 border-blue-400 py-2 px-8"
          >
            Read More
          </button>
        </div>
      </div>
    </section>

    <section id="berita" class="mt-40">
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-4xl text-[#353535] font-extrabold text-center">
          Stay Up To <span class="text-blue-400">Date</span>
        </h3>
        <p class="text-lg mt-6 font-bold text-[#9a9a9a] text-center">
          Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel
          neque vitae lorem molestie.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div class="rounded-b-3xl shadow-2xl">
          <img
            src="../../public/burma-kids.svg"
            alt="burma kids"
            class="w-full"
          />
          <div class="keterangan px-4 py-6">
            <h5 class="font-bold">Category</h5>
            <h3 class="text-blue-400 font-bold text-2xl">
              Empower the Kids of Burma
            </h3>
            <p class="text-[#a9a9a9] mt-3">
              Tincidunt eros imperdiet nulla dolor sit. Leo ultrices vulputate
              eu pellentesque lectus. Leo ultrices vulputate eu ...
            </p>
          </div>
        </div>
        <div class="rounded-b-3xl shadow-2xl">
          <img
            src="../../public/burma-kids.svg"
            alt="burma kids"
            class="w-full"
          />
          <div class="keterangan px-4 py-6">
            <h5 class="font-bold">Category</h5>
            <h3 class="text-blue-400 font-bold text-2xl">
              Empower the Kids of Burma
            </h3>
            <p class="text-[#a9a9a9] mt-3">
              Tincidunt eros imperdiet nulla dolor sit. Leo ultrices vulputate
              eu pellentesque lectus. Leo ultrices vulputate eu ...
            </p>
          </div>
        </div>
        <div class="rounded-b-3xl shadow-2xl">
          <img
            src="../../public/burma-kids.svg"
            alt="burma kids"
            class="w-full"
          />
          <div class="keterangan px-4 py-6">
            <h5 class="font-bold">Category</h5>
            <h3 class="text-blue-400 font-bold text-2xl">
              Empower the Kids of Burma
            </h3>
            <p class="text-[#a9a9a9] mt-3">
              Tincidunt eros imperdiet nulla dolor sit. Leo ultrices vulputate
              eu pellentesque lectus. Leo ultrices vulputate eu ...
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <RouterLink to="/news" class="text-blue-400 font-bold mt-8 text-xl"
          >Read More ➡️</RouterLink
        >
      </div>
    </section>
  </main>

  <section
    id="feedback"
    class="bg-blue-400 text-white mt-40 py-20 custom-shadow md:px-28 px-6"
  >
    <div class="flex flex-row">
      <div class="kiri md:w-2/3 w-full">
        <h1 class="font-bold text-white text-5xl">Be A Part Of Our Journey</h1>
        <p class="text-[#eaeaea] mt-10 md:w-2/3 w-full text-2xl">
          We are always looking for feedback from our users. If you have any
          suggestions or comments, please let us know. We would love to hear
          from you.
        </p>
        <form class="md:w-2/3 w-full mt-10" @submit="handleSubmit">
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2" for="nama"
              >Nama <span class="text-red-500">*</span></label
            >
            <input
              id="nama"
              type="text"
              placeholder="Masukkan nama kamu"
              class="w-full border-[1px] text-black focus:outline-none border-zinc-500 px-3 py-2 rounded-xl"
              v-model="nama"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2" for="email"
              >Email <span class="text-red-500">*</span></label
            >
            <input
              id="email"
              type="email"
              placeholder="Masukkan email kamu"
              class="w-full text-black border-[1px] focus:outline-none border-zinc-500 px-3 py-2 rounded-xl"
              v-model="email"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2" for="pesan"
              >Pesan <span class="text-red-500">*</span></label
            >
            <textarea
              id="pesan"
              type="text-area"
              placeholder="Masukkan pesan kamu"
              class="w-full text-black border-[1px] focus:outline-none border-zinc-500 px-3 py-2 rounded-xl"
              v-model="pesan"
              required
            />
          </div>
          <div class="mb-6 flex flex-row items-center gap-x-3">
            <label class="text-sm font-medium mb-2" for="is_anonymous">
              Send as anonymous?
            </label>
            <input
              type="checkbox"
              id="is_anonymous"
              class="custom-checkbox mr-2"
              v-model="is_anonymous"
            />
          </div>
          <button
            type="submit"
            class="mt-4 w-full text-white rounded-3xl border-2 border-white py-2 px-8"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="kanan">
        <img
          src="../../public/kang-pos.svg"
          class="hidden lg:block"
          alt="kang pos"
        />
      </div>
    </div>
  </section>
  <Footer class="-mt-10" />
</template>

<style scoped>
.custom-checkbox {
  appearance: none;
  background-color: #fff;
  border: 2px solid #9ca3af;
  border-radius: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.custom-checkbox:checked::after {
  content: "";
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  width: 0.5rem;
  height: 0.5rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-shadow {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
}
</style>
