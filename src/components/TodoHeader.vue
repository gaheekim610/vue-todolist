<template>
  <div class="header">
      <h1 class="title">{{ name }} </h1>
  </div>
</template>

<script>
export default {
  props:{
    name:String
  }
}
</script>

<style scoped lang="scss">
.header{
  height: 80px;
  text-align: center;
  border: 1px solid black;
  line-height: 80px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>