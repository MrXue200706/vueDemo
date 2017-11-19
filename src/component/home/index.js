import HomeComponent from './home.vue';

export default{
    install(Vue){
        Vue.component('app-home',HomeComponent);
    }
}