<template>
<div class="inputContainer">
    <v-text-field
      label="write your todo"
      :rules="rules"
      :todo="todo"
      hide-details="auto"
    >{{ todo }} </v-text-field>
      <v-btn depressed>
      Normal
    </v-btn>
</div>
</template>

<script>
export default {
  data() {
    return {
      ruels:[
        value => !!value || 'Required'
      ],
      todo: "test"
    }
  },
}
</script>

<style scoped>
  .inputContainer {
    display: flex;
  }
</style>