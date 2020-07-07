<template>
  <div id="app">
    <todo-header @addList="addList"></todo-header>
    <todo-list :list="list"></todo-list>
    <todo-footer :list="list" @clearCheckedList="clearCheckedList" @checkAll="checkAll"></todo-footer>
  </div>
</template>

<script>
  import * as Model from '@/model/static'


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
    this.getLizardCode()

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
    },


    // 请求静态资源
    getLizardCode () {
      const cacheTimes = 30 * 24 * 60 * 60 * 1000
      Model.getLizardCode({
        type: 'GET',
        dataType: 'text',
        cache: true,
        expires: cacheTimes
      }).then((res) => {

        if (res && typeof res == 'string') {
          if (utils.isLocalStorageSupported()) {
            if (!store.get('/webapp-static/lizard/index.js'), 'local') {
              let result = {
                times: new Date().getTime() + cacheTimes,
                results: res
              }
              store.set('/webapp-static/lizard/index.js', result, 'local')
            }
          }
        }
      })
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
