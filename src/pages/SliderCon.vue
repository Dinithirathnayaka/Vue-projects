<template>
  <div class="relative flex flex-wrap w-full">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height: 350px"
        ></div
      ></transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActve(index)"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full shadow-md cursor-pointer"
        ></div>
      </div>
    </div>
    <!-- <div class="flex w-full my-10 text-center">
      <div class="mx-auto text-center">
        <transition name="fade">
          <h2 v-if="isTitleShowing">Slider Carousel</h2>
        </transition>

        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 border rounded"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
      isTitleShowing: true,
    };
  },

  methods: {
    makeActve(index) {
      this.currentSlide = index;
    },
  },

  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
