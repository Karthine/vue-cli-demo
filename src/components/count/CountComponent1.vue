<template>
  <div>
     <span @click="add">{{count}}</span>
      <button @click="addSync">+</button>
      <button @click="reduce">-</button>
  </div>
</template>

<script>
   import store from '@/store'
    export default {
        name: "CountComponent",
        data(){
          return{
          }
        },
        computed:{
          count(){
            return this.$store.state.count
          }
        },
       methods:{
          add(){
            this.$store.dispatch('add')
          },
          addSync(){
            this.$store.dispatch('addSync',2)
          },
          reduce(){
            this.$store.dispatch('reduce')
          },

       }

    }
</script>

<style scoped>

</style>
