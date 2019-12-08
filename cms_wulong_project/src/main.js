// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Axios from 'axios'
import MintUI from 'mint-ui'
//引入css
import 'mint-ui/lib/style.css'
//引入mock.js
// import Mock from 'mockjs'
require('./mock')


Vue.use(MintUI);//里面其实做的是注册所有的全局组件，和给vue.prototype挂载一些对象，方便你使用组件内的this.xxxx就能用了。
//axios 开始  给Vue的原型挂载$axios属性
// Vue.prototype.$axios = Axios ;
// Axios.defaults.baseURL = 'http://localhost:8080';
//axios 结束

//引入 自己的插件安装器
import Installer from '@/plugins/Installer'
Vue.use(Installer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
