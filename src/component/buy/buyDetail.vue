<template>
    <article class="goods-detail">
    <!-- 轮播图 -->
        <mt-swipe :auto="10000">
        <!-- 我们这个商品缩略图是没有跳转连接的, 不需要router-link -->
        <mt-swipe-item v-for="item in lunbos" v-bind:key="item.src">
            <img v-bind:src="item.src">
        </mt-swipe-item>
        </mt-swipe>
        <!-- 商品购买 -->
        <div class="mui-card">
        <!-- 名称 -->
            <div class="mui-card-header">{{ goodsPrice.title }}</div>
            <!-- 价格 -->
            <div class="mui-card-content mui-card-content-inner">
                <div class="price"> <s>市场价:￥{{ goodsPrice.market_price }}</s> <span>销售价: </span> <em>￥{{ goodsPrice.sell_price }}</em> </div>
                <div> <span>购买数量：</span>
                <!--数字输入框 -->
                <app-numbox v-bind:initVal="buyCount" @change="getTotal"></app-numbox>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="mui-card-footer">
                <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
                <div></div>
                <button type="button" @click="addShopcart" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
            </div>
        </div>
  	    <!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡, 利用value的值控制选取那个子元素 -->
            <mt-navbar v-model="navbarSelector">
			  <mt-tab-item id="commont">商品评论</mt-tab-item>
			  <mt-tab-item id="intro">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容, 利用value的值控制选取那个子元素 -->
            <mt-tab-container v-model="navbarSelector">
			  <mt-tab-container-item id="commont">
			    <p>内容1</p>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="intro">
			    <app-intro v-bind:id="id"></app-intro>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
  </article>
</template>

<script>
//引入组件
import storage from '../../js/localStore.js'
import introComponent from './son/intro.vue';
export default {
    data(){
        return{
            lunbos:[],
            goodsPrice:{},
            buyCount: ((storage.get('goods') || {})[this.$route.params.id]) || 1,
            navbarSelector:'commont',
            id:this.$route.params.id,
        }
    },
    methods:{
        getLunbos(){
            this.axios.get(this.api.goodsT+this.id)
            .then(res => this.lunbos=res.data.message)
        },
        getGoodsPrice(){
            this.axios.get(this.api.goodsP+this.id)
            .then(res => this.goodsPrice=res.data.message[0])
        },
        getTotal(numb){
            this.buyCount=numb;
        },
        addShopcart(){
            //先取出数据，再合并
            // let oldData=storage.get('goods') || {};
            // oldData[this.id]=this.buyCount;
            // storage.set('goods',oldData);
            this.$store.commit('upBuyData',{
                id:this.id,
                total:this.buyCount
            })
        },
    },
    created(){
        this.getLunbos();
        this.getGoodsPrice();
    },
    //注册组件
    components:{
        'app-intro':introComponent
    }
}
</script>

<style lang='less'>
.goods-detail {
    .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
  // 给轮播图加个高度
  .mint-swipe {
    height: 260px;
    background-color: white;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: 260px;
    }
  }
}
</style>
