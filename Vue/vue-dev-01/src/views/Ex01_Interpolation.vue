<template>
  <div id="ex01">
    <h2>Ex01 Interpolation</h2>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "ex01",
  data() {
    return {
      message: "This message from interpolation"
    };
  }
};
</script>

<style></style>
