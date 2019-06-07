// 入口文件
import Vue from 'vue'

//导入app根组件  
import app from './App.vue'

//倒入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由模块
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //挂载路由对象
    router
})