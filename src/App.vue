<template>
  <div id="app">
    <router-link to="/todo">Todo</router-link>
    <router-link to="/test">Test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import * as Model from '@/model/static'

export default {
  name: 'App',
  components:{

  },
  data(){
    return {

    }
  },
  mounted(){
    this.getLizardCode()


  },
  methods:{


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
