<template>
  <div id="app">
    <!-- custom element는 하이픈으로 연결된 소문자로 표현한다 -->
    <TodoHeader name="Todo"></TodoHeader>
    <todo-input></todo-input>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name:'App', //todo: name을 넣어야 하는 경우는 언제인지?
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos:[]
    }
  },
}
</script>

<style>

</style>