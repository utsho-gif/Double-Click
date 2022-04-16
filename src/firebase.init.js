import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6ubbjzx02mq715fnGAKDbivOorwluQMo",
  authDomain: "double-click-9f53a.firebaseapp.com",
  projectId: "double-click-9f53a",
  storageBucket: "double-click-9f53a.appspot.com",
  messagingSenderId: "188110393776",
  appId: "1:188110393776:web:2ad7007f84f0b356834675",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
