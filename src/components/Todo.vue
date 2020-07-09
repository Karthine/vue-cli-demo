<template>
  <div>
    <todo-header @addList="addList"></todo-header>
    <todo-list :list="list"></todo-list>
    <todo-footer :list="list" @clearCheckedList="clearCheckedList" @checkAll="checkAll"></todo-footer>
  </div>
</template>

<script>

  import PubSub from 'pubsub-js'
  import TodoHeader from './todoComponents/todoHeader'
  import TodoList from './todoComponents/todoList'
  import TodoFooter from './todoComponents/todoFooter'

  export default {
    name: "Todo",
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data() {
      return {
        list: [
          {id: 1, text: '吃饭', checked: false},
          {id: 2, text: '睡觉', checked: false},
          {id: 3, text: '打豆豆', checked: false}
        ]
      }
    },
    mounted() {
      PubSub.subscribe('delItem', (msg, id) => {
        this.list = this.list.filter(item => item.id != id)

      })

      PubSub.subscribe('changeStatus', (msg, data) => {
        this.list.forEach((item) => {
          if (data.id === item.id) {
            item.checked = data.checked
          }
        })

      })
    },
    methods: {
      checkAll(val) {
        this.list.forEach(item => item.checked = val)

      },
      addList(item) {
        this.list.unshift(item)

      },
      clearCheckedList() {
        this.list = this.list.filter(item => !item.checked)
      },

    }

  }
</script>

<style scoped>

</style>
