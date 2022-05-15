<template>
  <div id="app">
    <!-- custom element는 하이픈으로 연결된 소문자로 표현한다 -->
    <todo-header name="Todo"></todo-header>
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list :propsList="todoList" @removeTodo="removeTodo"></todo-list>
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
      todoList:[]
    }
  },
  created:function(){
    // html 요소가 연결되기 전
    if(localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++) {
        this.todoList.push(localStorage.key(i))       
      }
    }
  },
  methods: {
    addTodo: function(value){
      // todo: API CRUD로 수정적용하기 
      localStorage.setItem(value,value);
      this.todoList.push(value)
    },
    removeTodo: function(todo,idx){
      localStorage.removeItem(todo);
      this.todoList.splice(idx,1);
    }
  },
}
</script>

<style scoped lang="scss">
  #app {
    // 브라우저 크기 줄여도 가운데정렬 유지
    position: relative;
    margin: 0 auto;
    max-width: 500px;
    width: 100%
  }
</style>