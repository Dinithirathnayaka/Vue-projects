<template>
  <section
    @click="close"
    class="fixed top-0 z-20 w-screen h-screen bg-gray-500 opacity-50"
  ></section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 w-1/3 p-2 m-auto bg-white rounded shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center text-bold">Login</h1>
          <GoogleLogin @close-login-from-google="close" />

          <p class="my-3 text-center">Or</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                ref="emailRef"
                v-model="email"
                type="text"
                class="w-full p-2 rounded shadow"
                placeholder="Enter your email or username"
              />
            </div>

            <div class="my-4">
              <label for="">Password</label>
              <input
                v-model="password"
                type="password"
                class="w-full p-2 rounded shadow"
                placeholder="Enter your password"
              />
            </div>

            <div class="my-4">
              <button
                type="submit"
                class="w-full p-2 text-white rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600"
              >
                <span v-if="!isLoading"> Login</span>
                <span v-else>⏳</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../components/utiities/firebase";
import {
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import GoogleLogin from "../components/Login/GoogleLogin.vue";

export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },

  methods: {
    // submit() {
    //   this.isLoading = true;

    //   auth
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then((res) => {
    //       console.log(res);
    //       this.email = "";
    //       this.password = "";
    //       this.isLoading = false;
    //       this.close();
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.error("Authentication error:", errorCode, errorMessage);
    //       this.isLoading = false;
    //     });
    // },
    submit() {
      this.isLoading = true;

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log(res);
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Authentication error:", errorCode, errorMessage);
          this.isLoading = false;
        });
    },

    close() {
      this.$emit("close-login");
    },

    mounted() {
      this.$refs.emailRef.focus();
    },
  },
};
</script>

<style></style>
