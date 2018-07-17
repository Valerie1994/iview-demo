// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 定义路由组件
const Cloud = require('./components/cloud.vue');
const Building = require('./components/building.vue');

// 定义路由，配置路由映射
const routes = [
  { path: '/', redirect: '/cloud' },
  { path: '/cloud', component: Cloud },
  { path: '/building', component: Building }
];

// 创建router实例
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

if (module.hot) {
  module.hot.accept();
  //支持热更新
  //当前模块代码更新后的回调，常用于移除持久化资源或者清除定时器等操作，如果想传递数据到更新后的模块，可以通过传入data参数，后续参数可以通过module.hot.data获取
  module.hot.dispose(() => {
    window.clearInterval(intervalId);
  });
}
