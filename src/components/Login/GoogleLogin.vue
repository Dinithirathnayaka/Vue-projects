<template>
  <section class="mt-5 text-center">
    <button class="px-2 border rounded" @click="loginWithGoogle">
      Login with Google
    </button>
  </section>
</template>

<script>
import { auth } from "../utiities/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  methods: {
    loginWithGoogle() {
      var provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(() => {
        this.$emit("close-login-from-google");
      });
    },
  },
};
</script>

<style></style>
