//引入vue
import Vue from 'vue';


import AppComponent from '../component/App.vue';


//实例化出Vue对象
new Vue({
    el:'#app',
    render(createNode){//渲染组件
        return createNode(AppComponent);
    }
})