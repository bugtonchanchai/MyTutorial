<template>
  <div id="ex-03">
    <h2>Ex03 - Routing</h2>
    <div>
      <h3 class="success">{{ message }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ex-03",
  data() {
    return {
      message: "Routing work!!!"
    };
  }
};
</script>

<style>
.success {
  color: green;
}
</style>
