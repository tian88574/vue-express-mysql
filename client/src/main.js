import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import VFormRender from 'vform3-builds/dist/render.umd.js'  //引入VFormRender组件
import 'vform3-builds/dist/render.style.css'  //引入VFormRender样式



createApp(App).use(store).use(router).use(VFormRender).use(ElementPlus,{locale:zhCn}).mount('#app')
