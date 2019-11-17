import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 设置 axios的常态地址
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
