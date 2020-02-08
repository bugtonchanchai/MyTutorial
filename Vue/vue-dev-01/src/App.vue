<template>
  <div id="app">
    <h1>vue-dev-01</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/ex-01">ex-01 - Interpolation</router-link></li>
      <li><router-link to="/ex-02">ex-02 - Binding</router-link></li>
      <li><router-link to="/ex-03">ex-03 - Routing</router-link></li>
      <li><router-link to="/ex-04">ex-04 - Conditionals and Loops</router-link></li>
    </ul>
    <hr />
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      data: "this text from interpolation",
      message: ""
    };
  }
};
</script>

<style></style>
