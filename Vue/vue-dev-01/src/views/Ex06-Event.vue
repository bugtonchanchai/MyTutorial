<template>
  <div app="ex-06">
    <h2>Ex06 - Event</h2>
    <div>
      <!-- <button v-on:click="clickMe">Click me</button>
      <button v-on:click="clickMe2('Hello vue')">Click me 2</button> -->
      <button @click="addCount(1)">+ 1</button>
      <button v-on:click="minusCount(1)">- 1</button>
      <h3>{{ getCurrentCnt() }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ex-06",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      this.cnt = 0;
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getCurrentCnt() {
      return this.cnt;
    },
    addCount(num) {
      this.cnt += num;
    },
    minusCount(num) {
      this.cnt -= num;
    }
  },
  data() {
    return {
      cnt: 0
    };
  }
};
</script>

<style></style>
