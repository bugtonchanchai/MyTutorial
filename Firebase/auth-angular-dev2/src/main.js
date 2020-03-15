import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase";
import store from "./store";

var firebaseConfig = {
  apiKey: "AIzaSyBZhHFEnBJaKpu2EZnjPBR1IEe9HiUllZM",
  authDomain: "pocketmemo-1b609.firebaseapp.com",
  databaseURL: "https://pocketmemo-1b609.firebaseio.com",
  projectId: "pocketmemo-1b609",
  storageBucket: "pocketmemo-1b609.appspot.com",
  messagingSenderId: "325435825243",
  appId: "1:325435825243:web:41cb658726e93cb57b337e",
  measurementId: "G-T3Q33FKT3F"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
