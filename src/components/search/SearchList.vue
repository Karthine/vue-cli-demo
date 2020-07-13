<template>
  <div class="container">
    <div class="avater_item" v-for="(item,index) in list" :key="index">
      <img class="avater_img" :src="item.avatar_url" alt="">
      <span class="name">{{item.login}}</span>
    </div>
  </div>
</template>


<script>
  import * as Model from '@/model/static'
  import {searchList} from './searchListData'
  import PubSub from 'pubsub-js'

  export default {
        name: "SearchList",
        data(){
          return {
            list:[]
          }
        },
        mounted() {
          PubSub.subscribe('search', (msg, data)=>{
            // 去搜索
              this.getSearchList(data)
          })
        },
        methods:{
          getSearchList(data) {
            setTimeout(() => {
              this.list = searchList.items

            }, 1000)

          }
        }
  }
</script>

<style  scoped>
  .container{
    display: flex;
    flex-wrap: wrap;

  }
  .avater_item{
    display: flex;
    flex-direction: column;
  }
  .avater_item .avater_img{
    width: 120px;
    height: 120px;
  }
  .name{
    color: #333333;
    font-size: 24px;
  }
</style>
