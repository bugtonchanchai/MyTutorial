<template>
  <div id="ex-05">
    <h2>Ex05 - Handling User Input</h2>
    <div id="app-02">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <div id="app-03">
      <p>{{ message }}</p>
      <input v-model="message" type="text" placeholder="enter message here" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ex-05",
  data() {
    return {
      message: "Hello Vue.js"
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style></style>
