<template>
  <div id="ex03">
    <h2>Ex03 Routing</h2>
    <div>
      <h3 class="success">{{ message }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ex03",
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
