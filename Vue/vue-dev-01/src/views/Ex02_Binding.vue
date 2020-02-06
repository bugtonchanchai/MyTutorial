<template>
  <div id="ex02">
    <h2>Ex02 Binding</h2>
    <input v-model="message" type="text" placeholder="enter message here" />
    <button @click="message = ''">reset</button>
    <div>
      <p><b>message :</b> {{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ex02",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style></style>
