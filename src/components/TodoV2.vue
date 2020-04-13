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
export default {
  props: {
    title: String
  },
  data() {
    return {
      todo: "",
      items: ["Vue", "is", "Awesome"]
    };
  },
  methods: {
    // Add: Click Handler Function
    add() {
      if (this.todo) {
        this.items.push(this.todo);
        this.todo = "";
      }
    },

    // Remove: Click Handler Function
    remove(item) {
      this.items = this.items.filter(v => v !== item);
    }
  },
  // mounted hook
  mounted() {
    console.log(`mounted ! ${ this.title }`);
  }
};
</script>

