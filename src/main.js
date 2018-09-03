// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyLoad  from 'vue-lazyload'

fastclick.attach(document.body)
Vue.config.productionTip = false

//懒加载图片
Vue.use(VueLazyLoad,{
	// loading: './common/image/default.png',
	loading: require('common/image/default.png')

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
  components: { App },
  template: '<App/>'
})
