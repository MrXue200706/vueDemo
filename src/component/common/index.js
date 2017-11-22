//编写自定义vue组件库（插件）
import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';
import NumboxComponent from './numbox.vue';

//vue要求提供install方法，将插件注入vue
//调用component扩展功能，如果是过滤器是filter，指令是directive
export default{
    install(Vue){
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer', FooterComponent);
        Vue.component('app-numbox', NumboxComponent);
    }
}