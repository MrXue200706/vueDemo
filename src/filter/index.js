import DateFilter from './date.js';

export default{
    install(Vue){
        Vue.filter('date',DateFilter);
    }
}