//引入vue
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';//只引入样式
import Common from '../component/common';
import 'mui/dist/css/mui.css';//引入样式
import 'mui/examples/hello-mui/css/icons-extra.css';//引入字体图标
import VueRouter from 'vue-router';
import axios from 'axios';
import Filter from '../filter';

//模块化后需要手动启用插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);
Vue.use(Filter);

//导入配置
import routerConfig from '../router';
import apiConfig from './api_config';
import store from './localStore.js';


//将axios注入VUE的原型中，这样其他组件都可以使用
Vue.prototype.axios=axios;
Vue.prototype.api=apiConfig;
Vue.prototype.store=store;

//导入根组件
import AppComponent from '../component/App.vue';

 
//实例化出Vue对象
new Vue({
    el:'#app',
    render(createNode){//渲染组件
        return createNode(AppComponent);
    },
    router:new VueRouter(routerConfig)
});