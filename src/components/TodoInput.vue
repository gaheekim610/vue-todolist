<template>
<div class="inputContainer">
    <v-text-field
      label="Write down your todo"
      v-model="todo"
      :value="todo"
      @keydown.enter="addTodo(todo)"
    />
      <v-btn fab
      dark
      x-small 
      @click="addTodo(todo)">
        <v-icon dark >
          mdi-plus
        </v-icon>
      </v-btn>
</div>
</template>

<script>
export default {
  data() {
    return {
      todo: ""
    }
  },
  methods: {
    addTodo: function(todo){
      this.$emit('addTodo',todo)
      this.clearInput();
    },
    clearInput: function(){
      this.todo = ""
    }
  }
}
</script>

<style scoped>
  .inputContainer {
    display: flex;
  }
</style>