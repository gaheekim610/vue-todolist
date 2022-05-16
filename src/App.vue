<template>
  <div id="app">
    <!-- custom element는 하이픈으로 연결된 소문자로 표현한다 -->
    <todo-header name="TodoList"></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App", //todo: name을 넣어야 하는 경우는 언제인지?
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  created: function () {
    this.$store.dispatch("loadTodoList");
  },
};
</script>

<style scoped lang="scss">
#app {
  // 브라우저 크기 줄여도 가운데정렬 유지
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>
