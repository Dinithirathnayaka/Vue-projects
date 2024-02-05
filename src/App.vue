<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />

  <router-view></router-view>

  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import { auth } from "./components/utiities/firebase";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: "",
    };
  },

  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        console.log("User is signed in:", user);
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
        console.log("User is signed out");
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>
