<template>
  <div class="inputContainer">
    <v-text-field
      label="Write down your todo"
      v-model="todo"
      :value="todo"
      @keydown.enter="addTodo(todo, false)"
    />
    <v-btn fab dark x-small @click="addTodo(todo, false)">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo: function (todo, isDone) {
      this.$store.dispatch("addTodo", { todo, isDone });
      this.clearInput();
    },
    clearInput: function () {
      this.todo = "";
    },
  },
};
</script>

<style scoped>
.inputContainer {
  display: flex;
}
</style>
