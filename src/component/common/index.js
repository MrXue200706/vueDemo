//编写自定义vue组件库（插件）
import HeaderComponent from './header.vue';

//vue要求提供install方法，将插件注入vue
//调用component扩展功能，如果是过滤器是filter，指令是directive
export default{
    install(Vue){
        Vue.component('app-header',HeaderComponent);
    }
}