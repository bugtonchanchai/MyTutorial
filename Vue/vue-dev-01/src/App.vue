<template>
  <div id="app">
    <h1>Vue-dev-01</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/ex01">Ex01 - Interpolation</router-link></li>
      <li><router-link to="/ex02">Ex02 - Binding</router-link></li>
      <li><router-link to="/ex03">Ex03 - Routing</router-link></li>
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
