// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Axios from 'axios'
import MintUI from 'mint-ui';
//引入css
import 'mint-ui/lib/style.css';
//引入mock.js
// import Mock from 'mockjs'
require('./mock');
//引入moment
import Moment from 'moment'
//自定义moment全局过滤器
Vue.filter('converTime',function(data,formatStr){  
  return Moment(data).format(formatStr);
});

Vue.config.productionTip = false;

Vue.use(MintUI);//里面其实做的是注册所有的全局组件，和给vue.prototype挂载一些对象，方便你使用组件内的this.xxxx就能用了。
//axios 开始  给Vue的原型挂载$axios属性
// Vue.prototype.$axios = Axios ;
// Axios.defaults.baseURL = 'http://localhost:8080';
//axios 结束

//引入 自己的插件安装器
import Installer from '@/plugins/Installer';
Vue.use(Installer);

//全局组件开始
import MyUl from '@/components/common/my-ul';
Vue.component(MyUl.name , MyUl);
import MyLi from '@/components/common/my-li';
Vue.component(MyLi.name , MyLi);
import Grid from '@/components/common/Grid';
Vue.component(Grid.name , Grid);
import NavBar from '@/components/common/NavBar';
Vue.component(NavBar.name , NavBar);

//全局组件 结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
