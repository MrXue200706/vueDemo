//引入vue
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';//只引入样式
import Common from '../component/common';

//模块化后需要手动启用插件
Vue.use(MintUi);
Vue.use(Common);


//导入根组件
import AppComponent from '../component/App.vue';


//实例化出Vue对象
new Vue({
    el:'#app',
    render(createNode){//渲染组件
        return createNode(AppComponent);
    }
})