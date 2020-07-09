<template>
  <li :class="{highLight:highLight}"
      @mouseenter="highLight = true"
      @mouseleave="highLight = false"
  >
    <!--    <label>-->
    <!--      <slot name="inputSlot" :id="index">-->
    <!--        <input type="checkbox" v-model="checked"  />-->
    <!--      </slot>-->
    <!--      <slot name="spanSlot" :text="item.text" >-->
    <!--        <span>{{item.text}}</span>-->
    <!--      </slot>-->
    <!--    </label>-->
    <label>
      <!-- v-model="item.checked 子组件直接修改了父组件App的数据  即 v-model脏数据  -->
      <!--   不能直接修改父组件的数据，非要修改的话，自己转存一份   -->
      <!--  <input type="checkbox" v-model="item.checked"/>-->
      <!--  没有达到数据驱动的编程思想，不推荐使用该方法    -->
      <!--  <input type="checkbox" v-model="checked" @change="changeStatus(item.id)" />-->

      <!--  推荐使用计算属性，计算属性既有get方法也有 set方法   -->
      <input type="checkbox" v-model="checked" />
      <span>{{item.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="highLight" @click="delItem(item.id)">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name: "Item",
    props:{
      item:{
        type:Object,
        default:{}
      }
    },
    data() {
        return {
          highLight:false,
          // 这种方式不好
          // checked:this.item.checked
        }
    },
    computed:{
      checked:{
        get(){
          return this.item.checked
        },
        set(val){
          console.log(val);
          PubSub.publish('changeStatus',{id:this.item.id,checked:val})

        }
      }
    },
    methods:{
      // 通过dom事件驱动不满足数据驱动的编程思想
      // changeStatus(id){
      //   PubSub.publish('changeStatus',{id,checked:this.checked})
      // },
      delItem(id){
        PubSub.publish('delItem',id)

      }
    }
  }
</script>

<style scoped>
  .highLight {
    background: pink !important;
  }

  .line {
    position: relative;
  }

  .line:after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 3px;
    width: 90%;
    background: gray;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    position: relative;
    z-index: 99;
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
