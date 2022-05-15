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
import axios from 'axios'

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
  created: async function(){
   try{
     const loadRes = await axios.get('https://jsonplaceholder.typicode.com/todos');
      if(loadRes.status!==200) throw loadRes;
      this.todoList = loadRes.data.sort((a,b)=> b.id-a.id);
    }catch(error){
      // todo: 에러관련 메세지 띄우기
      console.log('error',error);
    }
  },
  methods: {
    addTodo: async function(title,completed){
      try{
          const addRes = await axios.post('https://jsonplaceholder.typicode.com/todos', {title,completed})
        if(addRes.status!==201) throw addRes;
        this.todoList=[addRes.data,...this.todoList];
      }catch(error){
        // todo: 에러관련 메세지 띄우기
        console.log('error',error);
      }

    },
    removeTodo: async function(id){
      try{
        const delRes = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if(delRes.status!==200) throw delRes;
        this.todoList = this.todoList.filter(todo=>todo.id!==id)
     }catch(error){
       // todo: 에러관련 메세지 띄우기
       console.log('error',error);
      }
    }
  },
}
</script>

<style scoped lang="scss">
  #app {
    // 브라우저 크기 줄여도 가운데정렬 유지
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    width: 100%
  }
</style>