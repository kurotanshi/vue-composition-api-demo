<template>
  <div id="app">
    <img class="logo" width="25%" src="./assets/logo.png">

    <h3 class="title">Todo App</h3>
    <div class="container">
      <div class="comp">
        <TodoV3 title="Using Vue Functions Based API" />
      </div>

      <div class="comp">
        <todo-v2 title="Using Vue2 option based API" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoV3 from "./components/TodoV3.vue";
import TodoV2 from "./components/TodoV2.vue";

export default {
  name: "App",
  components: {
    TodoV3,
    TodoV2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
  width: 15%;
}

.title {
  margin-top: 1em;
  font-size: 2em;
}

.container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
}

.comp + .comp {
  margin-left: 2em;
}

.comp p {
  font-weight: 900;
  font-size: 1.2em;
}
</style>
