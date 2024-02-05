import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXsBWtniqCSe-fdtwOxfLpsEkZYbgFS7w",
  authDomain: "vue-full-course-cb2e0.firebaseapp.com",
  projectId: "vue-full-course-cb2e0",
  storageBucket: "vue-full-course-cb2e0.appspot.com",
  messagingSenderId: "397207822205",
  appId: "1:397207822205:web:da9b8214e4c34b0b7df614",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
