<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{computedCount}}</span> / 全部{{list.length}}
        </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      name: "todoFooter",
      props:{
        list:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{

        }
      },
      computed:{
        // checkAll()函数只能读取，应该要写成读取和设置的计算属性
        // checkAll(){
        //   return this.list.filter(item => item.checked).length == this.list.length
        // },
        checkAll:{
          get(){
            return (this.list.length !== 0) &&  (this.computedCount === this.list.length)
          },
          set(val){
            // this.isCheckAll = !this.isCheckAll
            this.$emit('checkAll',val)
          }
        },
        computedCount(){
          return this.list.filter(item => item.checked).length
        }
      },
      methods:{
        clear(){
          this.$emit('clearCheckedList')
        }
      }

    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
