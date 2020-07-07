<template>
  <div id="app">
    <todo-header @addList="addList"></todo-header>
    <todo-list :list="list"></todo-list>
    <todo-footer :list="list" @clearCheckedList="clearCheckedList" @checkAll="checkAll"></todo-footer>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/todoHeader'
  import TodoList from './components/todoList'
  import TodoFooter from './components/todoFooter'
export default {
  name: 'App',
  components:{
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data(){
    return {
      list:[
        {id:1,text:'吃饭',checked:false},
        {id:2,text:'睡觉',checked:false},
        {id:3,text:'打豆豆',checked:false}
      ]
    }
  },
  mounted(){
    PubSub.subscribe('delItem',(msg, id)=>{
      this.list = this.list.filter(item => item.id != id)

    })

    PubSub.subscribe('changeStatus',(msg,data) => {
      this.list.forEach((item)=>{
        if (data.id === item.id) {
          item.checked = data.checked
        }
      })

    })
  },
  methods:{
    checkAll(val){
      this.list.forEach(item => item.checked = val)

    },
    addList(item){
      this.list.unshift(item)

    },
    clearCheckedList(){
      this.list = this.list.filter(item => !item.checked)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
