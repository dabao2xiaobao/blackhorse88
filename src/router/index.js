import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home'
import Layout from '../views/layout'
import Login from '../views/login'
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
import Nprogress from 'nprogress'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/',
    // name: 'home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/publish',
        component: Publish
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
// 路由的拦截器 beforeEach 方法，该方法接收一个函数作为参数
// 参数1：to，表示去哪里的路由信息
// 参数2：from，表示来自哪里的路由信息
// 参数3：next，它是一个方法，用于路由放行
// 我们具体要做的就是：判断用户的登录状态，有就通过，没有就跳转到登录页。
router.beforeEach((to, from, next) => {
  // console.log('所有访问的页面都要经过这里')
  // 如果直接访问的是登录页面,直接放过去
  // 开启导航进度条
  Nprogress.start()
  if (to.path === '/login') {
    next()
    return
  }
  // 不是的登录页面,校验登录状态
  // 获取用户的token
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
    // 如果在登录页并且是非登陆状态访问非登录页面，这里手动的终止进度条,否则进度条不会停止
    Nprogress.done()
  }
})
// 路由导航结束以后触发的狗子
router.afterEach((to, from) => {
  // 结束顶部的导航进度条
  Nprogress.done()
})
export default router
