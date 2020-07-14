import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ToDo from '@/components/Todo'
import NewsMessage from '@/components/NewsMessage'
import Home from '@/components/newsMessageComponents/Home'
import About from '@/components/newsMessageComponents/About'
import News from '@/components/newsMessageComponents/News'
import Message from '@/components/newsMessageComponents/Message'
import User from '@/components/user'
import Search from '@/components/search'

export default new Router({
  mode:'history',
  routes: [
    // 重定向
    // {
    //   path:'/',
    //   redirect:'/todo'
    // },
    {
      path:'/todo',
      component:ToDo
    },
    {
      path:"/test",
      component:NewsMessage,
      children:[
        {
          path:"home",
          component:Home,
          children:[
            {
              path:"news",
              component:News,
            },
            {
              path:"message",
              component:Message,
            }
          ]
        },
        {
          path:"about",
          component:About
        }
      ]
    },
    {
      path:'/user/:id',
      component:User,

    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/count',
      component:()=>import('@/components/count/CountComponent.vue')
    }
  ]
})
