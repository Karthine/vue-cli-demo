import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
   state:{
     count:10,
     firstName:'T',
     lastName:'MAC'
   },
  getters:{
     flag(state){
       return state.count % 2 == 0 ? '偶数':'奇数'
     },
     fullName(state){
       return state.firstName + state.lastName
     }
  },

  mutations:{
    add(state,val){
      state.count+=val
    },
    reduce(state){
      state.count--
    }
  },
  actions:{
    addSync(state,val){
      setTimeout(function () {
        state.commit('add',val)
      },2000)
    },
    add({commit}){
      commit('add',1)
    },
    reduce({commit}){
      commit('reduce')
    }
  }
})

export default store
