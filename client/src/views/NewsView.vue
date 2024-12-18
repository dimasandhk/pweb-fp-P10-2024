<script>
export default {
  name: "NewsView",
  data() {
    return {
      newsData: [
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-kids.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-2.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-3.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-kids.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-2.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-3.svg",
        },
      ],
      additionalData: [
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-kids.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-2.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-3.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-kids.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-2.svg",
        },
        {
          title: "Ensuring medicine for all the children.",
          path: "../../public/burma-3.svg",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (bottomOfWindow) {
        setTimeout(() => {
          this.appendData();
        }, 1000);
      }
    },
    appendData() {
      this.newsData = [...this.newsData, ...this.additionalData];
    },
  },
};
</script>

<template>
  <main class="mt-24 pb-32">
    <div class="flex justify-center flex-col">
      <h3 class="text-4xl text-[#353535] font-extrabold text-center">
        Stay Up To <span class="text-blue-400">Date</span>
      </h3>
      <p class="text-[#9a9a9a] text-center mt-4 font-medium">
        News content goes here
      </p>
    </div>

    <section class="highlight md:px-28 px-6 mt-10">
      <div class="flex flex-row lg:gap-x-20">
        <div class="kiri md:w-2/3 w-full">
          <h5 class="text-blue-400 font-semibold">CATEGORY</h5>
          <h1 class="text-[#353535] font-extrabold text-5xl mt-7">
            Ensuring medicine for all the children.
          </h1>
          <p class="mt-7 text-[#878787] font-medium md:w-2/3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec ultricies bibendum, justo odio tincidunt sapien,
            nec ultricies odio nunc nec justo. Nulla tincidunt, nunc nec
            ultricies bibendum, justo odio tincidunt sapien, nec ultricies odio
            nunc nec justo.
          </p>
          <button class="bg-blue-400 text-white px-4 py-2 rounded-3xl mt-10">
            Read More
          </button>
        </div>
        <div class="kanan">
          <img
            src="../../public/adek-highlight.svg"
            class="hidden lg:block"
            alt="adek"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-40"
      >
        <div
          class="rounded-b-3xl shadow-2xl"
          v-for="(news, index) in newsData"
          :key="index"
        >
          <img :src="news.path" :alt="news.title" class="w-full" />
          <div class="keterangan px-4 py-6">
            <h5 class="font-bold">Category</h5>
            <h3 class="text-blue-400 font-bold text-2xl">
              {{ news.title }}
            </h3>
            <p class="text-[#a9a9a9] mt-3">
              Tincidunt eros imperdiet nulla dolor sit. Leo ultrices vulputate
              eu pellentesque lectus. Leo ultrices vulputate eu ...
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
