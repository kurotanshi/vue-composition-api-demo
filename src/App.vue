<template>
  <div id="app">
    <img class="logo" width="25%" src="./assets/logo.png">

    <h3 class="title">Mouse Position Detection</h3>
    <div class="container">
      <div class="comp">
        <MousePositionV3 title="Using Vue Composition API"/>
      </div>
      <div class="comp">
        <MousePositionV2 title="Using Vue2 option based API"/>
      </div>
    </div>

    <hr>

    <h3 class="title">Todo App</h3>
    <div class="container">
      <div class="comp">
        <TodoV3 title="Using Vue Composition API" />
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
import MousePositionV3Vue from "./components/MousePositionV3.vue";
import MousePositionV2Vue from "./components/MousePositionV2.vue";

export default {
  name: "App",
  components: {
    TodoV3,
    TodoV2,
    MousePositionV3: MousePositionV3Vue,
    MousePositionV2: MousePositionV2Vue,
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
  margin: 60px 0;
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
