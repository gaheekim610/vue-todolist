<template>
  <div>
    <div><span>게시물 번호: </span> {{ detail.id }}</div>
    <div><span>게시물 제목: </span>{{ detail.title }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  props: ["id"],
  created: function () {
    this.$store.dispatch("loadTodo", this.id);
  },
  computed: {
    detail() {
      return this.$store.state.todo;
    },
  },
};
</script>

<style></style>
