<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full my-4 text-center xt-4xl">Markdown App</h1>
    <section class="flex w-10/12 h-screen m-auto">
      <article class="w-1/2 border">
        <textarea
          ref="markdownTextArea"
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 bg-gray-100 border" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "../components/utiities/composition/useDebounce";

export default {
  data() {
    return {
      text: "",
      debounce: "",
    };
  },

  computed: {
    markedText() {
      return marked(this.text);
    },
  },

  mounted() {
    this.debounce = useDebounce();
    this.$refs.markdownTextArea.focus();
  },

  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

<style></style>
