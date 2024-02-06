<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="my-5 text-2xl">Re-useable Moda</h1>

      <button
        @click="isRedModalOpen = true"
        class="px-2 mx-4 text-white bg-red-500 border rounded"
      >
        Red Modal
      </button>
      <ModalCon v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <template #title>Red Modal</template>

        <template #body>This is a body slot for red modal</template>
      </ModalCon>

      <button
        @click="isBlueModalOpen = true"
        class="px-2 mx-4 text-white bg-blue-500 border rounded"
      >
        Blue Modal
      </button>
      <ModalCon v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <template v-slot:title>Blue Modal</template>

        <template v-slot:body>This is a body slot for blue modal</template>
      </ModalCon>
    </div>
  </section>
</template>

<script>
import ModalCon from "../components/ModalCon.vue";
import { ref } from "vue";

export default {
  components: { ModalCon },

  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
    return { isRedModalOpen, isBlueModalOpen };
  },
};
</script>

<style></style>
