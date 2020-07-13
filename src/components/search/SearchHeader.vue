<template>
  <div>
    <input type="text" placeholder="请输入搜索内容" v-model="searchContent">
    <button @click="gotoSearch">搜索</button>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
        name: "SearchHeader",
        data(){
          return{
            searchContent:''
          }
        },
        methods:{
          gotoSearch(){
            //不要用const {searchContent} = this.data,不要和小程序的语法搞混，vue的data中的数据是直接挂载到vm实例，即this身上
            const {searchContent} = this;
            if (searchContent){
              PubSub.publish('search',searchContent)
            }
          }
        }
    }
</script>

<style scoped>

</style>
