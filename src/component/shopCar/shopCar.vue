<template>
    <article class="shopcart-list">

    <!-- 商品列表 -->
    <div class="goods" v-for="item in buyGoodsList" v-bind:key="item.id">
      <mt-switch class="switch" v-model="item.isSelected"></mt-switch> 
      <img class="img" v-bind:src="item.thumb_path">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ item.sell_price }}</li>
            <li>
                <div>
                    <app-numbox @change="changeData(item.id,$event)" v-bind:initVal="$store.state.goods[item.id]"></app-numbox>
                </div>
            </li>
            <li>
              <a href="javascript:void(0)" @click="del(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{ selectedGoodsTotal }}件,总价:￥{{ selectedGoodsPriceTotal }}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
import storage from '../../js/localStore.js';
import Vue from 'vue';
export default {
    data(){
      return{
        buyGoodsList:[],
        // itemGoods:(storage.get('goods')),
      }
    },
    methods:{
      //打开即获取数据列表
      getGoods(){
        let goods= (storage.get('goods')) || {};
        let ids=Object.keys(goods).join(',') || 1;
        this.axios.get(this.api.shopcL+ids)
        .then(res => {
          res.data.message.forEach(goods => goods.isSelected = true);//给每项添加isSelected属性========
          this.buyGoodsList=res.data.message;
        });
      },
      //输入框数据发生变化时取出数据，更改数据，再存入localStorage
      changeData(id,value){
        // this.itemGoods[id]=value;//不用vuex时的方法
        this.$store.commit('upBuyData',{
          id:id,
          total:value
        })
      },
      //删除购买数据
      del(id){
        // Vue.delete(this.itemGoods,id);//不用vuex时的方法
        this.$store.commit('delBuyData',{
          id:id
        })
        this.buyGoodsList=this.buyGoodsList.filter(v => v.id != id);
      }
    },
    created(){
        this.getGoods();
    },
    computed:{
      //实时获取选择的总数
      selectedGoodsTotal() {//==============>此方法？
        return this.buyGoodsList.reduce((sum, good) => {
          return good.isSelected? sum + this.$store.state.goods[good.id] : sum;
        }, 0);
      },
      //实时获取选择的商品总价格:
      //遍历buyGoodsList里面的对象，如果isSelected=true则选中，按选中的商品的id获取localStorage里面
      //相应的id的数量，累加到这计算属性里
      selectedGoodsPriceTotal(){//总价
        let sum=0;
        this.buyGoodsList.forEach((good)=>{
          if(good.isSelected){
            sum+=(this.$store.state.goods[good.id]*good.sell_price);
          }
        })
        return sum;
      }
    },
    // watch:{
    //   itemGoods:{//监听对象变化需要深度监听
    //     handler(){
    //       storage.set('goods',this.itemGoods);
    //     },
    //     deep:true
    //   }
    // }
}
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 110px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>

