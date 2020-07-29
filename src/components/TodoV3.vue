<template>
  <div>
    <p>{{ title }}</p>
    <div class="form-group d-flex">
      <input v-model="todo" @keyup.enter="add" type="text" class="form-control shadow-none rounded-0">
      <button class="btn btn-primary shadow-none border-0 rounded-0" @click="add">Add</button>
    </div>

    <div class="list-group">
      <div
        class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in items"
          :key="item">
        <span>{{ item }}</span>
        <button class="close shadow-none border-0" @click="remove(item)">
          <span>&times;</span>
        </button>
      </div>
    </div>
  </div>

</template>


<script>
import toDo from "../composition/Todo";

export default {
  props: {
    title: String
  },
  setup(props, context) {
    const todo = toDo(props.title);
    
    return todo;
  }
};
</script>
