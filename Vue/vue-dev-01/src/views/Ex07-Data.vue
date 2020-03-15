<template>
  <div app="ex-07">
    <h2>Ex07 - Data and Variable</h2>
    <div>
      <button @click="count++">Count++</button>
      <h4>{{ count }}</h4>
      <h4>{{ message }}</h4>
      <h4>{{ isBool }}</h4>
      <input v-model="message" type="text" placeholder="enter message" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ex-07",
  mounted() {
    this.message = "This is from mounted function";
  },
  data() {
    return {
      count: 0,
      message: "",
      isBool: false
    };
  }
};
</script>

<style></style>
