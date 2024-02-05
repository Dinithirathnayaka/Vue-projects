<template>
  <div class="justify-center mx-auto mt-10 text-center w-80">
    <h1 class="text-3xl text-bold">Fruits List {{ fruitsCount }}</h1>
    <ul>
      <li v-for="(fruit, index) in fruitsList" :key="fruit.name">
        <div class="flex justify-between mb-2">
          {{ fruit.name }}
          <button
            @click="remove(index)"
            class="w-10 h-10 p-2 text-white bg-red-600"
          >
            x
          </button>
        </div>
      </li>
    </ul>

    <form @submit.prevent="addFruit" class="mt-10">
      <input
        v-model="newFruit"
        type="text"
        placeholder="Add new fruit here"
        class="p-2 mx-1 border"
        ref="newFruitRef"
      />
      <button type="submit" class="p-2 text-white bg-green-600 border">
        Add Fruit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {},
  computed: {
    fruitsCount() {
      return this.fruitsList.length;
    },
  },

  mounted() {
    this.$refs.newFruitRef.focus();
  },
  methods: {
    addFruit() {
      if (this.newFruit != "") {
        this.fruitsList.unshift({ name: this.newFruit });
        this.newFruit = "";
      }
    },

    remove(index) {
      this.fruitsList = this.fruitsList.filter((fruit, i) => i != index);
    },
  },
  data() {
    return {
      fruitsList: [
        { name: "Apple" },
        { name: "Orange" },
        { name: "Mango" },
        { name: "Pineapple" },
      ],
    };
  },
};
</script>

<style></style>
