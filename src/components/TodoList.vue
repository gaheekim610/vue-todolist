<template>
  <div class="list">
    <li v-for="item in propsList" :key="item.id">{{ item.title }}
        <v-btn
      class="minusBtn"
      fab
      dark
      x-small
      color="primary"
      @click="removeTodo(item.id)"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
    </li>
  </div>
</template>

<script>
  export default {
    props:["propsList"],
    methods:{
      removeTodo(id){
        this.$emit("removeTodo",id)
      }
    },
  }
</script>

<style scoped lang="scss">

  .list{
    line-height: 35px;
    
    & .minusBtn{
    position: absolute;
    right: 0;
    }
    
  }
</style>