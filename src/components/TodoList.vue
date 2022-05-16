<template>
  <div class="list">
    <li v-for="item in list" :key="item.id">
      {{ item.title }}
      <v-btn
        class="minusBtn"
        fab
        dark
        x-small
        color="primary"
        @click="$store.dispatch('removeTodo', item.id)"
      >
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
    </li>
  </div>
</template>

<script>
export default {
  // todo: 왜 computed에서 셋팅되어야 하는지?
  computed: {
    list() {
      return this.$store.state.todoList;
    },
  },
  // methods: {
  //   removeTodo(id) {
  //     this.$emit("removeTodo", id);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.list {
  line-height: 35px;

  & .minusBtn {
    position: absolute;
    right: 0;
  }
}
</style>
