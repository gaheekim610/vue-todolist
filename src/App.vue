<template>
  <div id="app">
    <!-- custom element는 하이픈으로 연결된 소문자로 표현한다 -->
    <todo-header name="TodoList"></todo-header>
    <!-- 라우팅되는 부분이 보이게 된다. -->
    <router-view></router-view>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
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
