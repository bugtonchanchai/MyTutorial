<template>
  <div id="ex-04">
    <h2>Ex04 - Conditionals and Loops</h2>
    <!-- <div id="app-01">
      <span v-if="seen">Now you see me</span>
    </div> -->
    <div id="app-02">
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.text">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "ex-04",
  data() {
    return {
      seen: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  }
};
</script>

<style></style>
