<template>
  <div class="list">
    <li v-for="(item,idx) in propsList" :key="item">{{ item }}
        <v-btn
      class="minusBtn"
      fab
      dark
      x-small
      color="primary"
      @click="removeTodo(item,idx)"
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
      removeTodo(item,idx){
        this.$emit("removeTodo",item,idx)
      }
    }
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