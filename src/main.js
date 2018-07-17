// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import iView from 'iview' // npm安装iview之后main引入
import 'iview/dist/styles/iview.css' // npm安装iview之后main引入iview的css

Vue.use(VueRouter)
Vue.use(iView)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => {
//     window.clearInterval(intervalId);
//   });
// }
// 支持热更新
// 当前模块代码更新后的回调，常用于移除持久化资源或者清除定时器等操作，如果想传递数据到更新后的模块，可以通过传入data参数，后续参数可以通过module.hot.data获取
