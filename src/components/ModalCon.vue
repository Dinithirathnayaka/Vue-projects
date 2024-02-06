<template>
  <section
    @click="close"
    class="fixed top-0 left-0 z-20 w-screen h-screen bg-gray-500 opacity-50"
  ></section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 w-1/3 p-2 m-auto bg-white rounded shadow">
        <div class="p-2 border">
          <h1 class="text-2xl">
            <slot name="title"></slot>
          </h1>

          <main>
            <slot name="body"> </slot>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }

    return { close };
  },
};
</script>

<style></style>
