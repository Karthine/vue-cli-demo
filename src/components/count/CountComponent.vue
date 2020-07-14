<template>
  <div>
     <div>{{fullName}}</div>
     <span @click="add">{{count}} 是 {{flag}}</span>
      <button @click="addSync(2)">+</button>
      <button @click="reduce">-</button>
  </div>
</template>

<script>
   import store from '@/store'
   import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        name: "CountComponent",
        data(){
          return{
          }
        },
        computed:{
          //maoState相当于 count: state => state.count
          ...mapState(['count']),
          // count(){
          //   return this.$store.state.count
          // }
          ...mapGetters(['flag','fullName'])

        },
       methods:{
          // add(){
          //   this.$store.dispatch('add')
          // },
          // addSync(){
          //   this.$store.dispatch('addSync',2)
          // },
          // reduce(){
          //   this.$store.dispatch('reduce')
          // },

         // addSync()函数的参数写在定义的时候
         ...mapActions(['add','addSync','reduce'])

       }

    }
</script>

<style scoped>

</style>
