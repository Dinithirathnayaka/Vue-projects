<template>
  <nav
    class="flex justify-start w-full px-4 py-5 text-4xl text-white bg-gradient-to-r from-blue-800 to-blue-500 text-enter"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      v-bind:to="item.to"
      class="mx-2"
      >{{ item.title }}</router-link
    >

    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script>
import { auth } from "../components/utiities/firebase";
export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      list: [
        { title: "Fruits", to: "/fruits" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },

  methods: {
    logout() {
      auth
        .signOut(auth)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
