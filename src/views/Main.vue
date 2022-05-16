<template>
  <div>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default {
  components: {
    TodoInput,
    TodoList,
  },
  created: function () {
    this.$store.dispatch("loadTodoList");
  },
};
</script>

<style></style>
