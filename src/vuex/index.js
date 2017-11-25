import storage from '../js/localStore.js';
import Vue from 'vue';
export default{
    //定义状态，相当于组件里的data
    //里面的数据可以全局使用
    state:{
        //从localStorage中取出数据共享
        goods:storage.get('goods') || {}
    },
    //定义计算属性，相当于组件里的computed
    getters:{
        //计算购买总数
        getGoodsTotal(state){
            return Object.values(state.goods).reduce((sum,val)=>sum+=val,0)
        }
    },
    //定义修改方法集，相当于methods，但是只能用于修改状态值
    mutations:{
        //修改单个商品的购买数量，并把修改后的数据存进localStorage
        upBuyData(state,params){
            Vue.set(state.goods,params.id,params.total);
            storage.set('goods',state.goods);
        },
        //删除单个商品的购买数量
        delBuyData(state,params){
            //拿到商品ID，使用Vue提供的专属方法删除该商品，再储存进localStorage
            Vue.delete(state.goods,params.id);
            storage.set('goods',state.goods);
        }
    }
}