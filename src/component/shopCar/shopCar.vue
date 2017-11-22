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
                    <app-numbox></app-numbox>
                  <!-- <button class="mui-btn mui-btn-numbox-minus">-</button>
                  <input class="mui-input-numbox" type="number">
                  <button class="mui-btn mui-btn-numbox-plus">+</button> -->
                </div>
            </li>
            <li>
              <a href="javascript:void(0)">删除</a>
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
export default {
    data(){
        return{
            buyGoodsList:[],
        }
    },
    methods:{
        getGoods(){
            let goods= JSON.parse(this.store.get('goods'));
            let ids=Object.keys(goods).join(',');
            this.axios.get(this.api.shopcL+ids)
            .then(res => {
                this.buyGoodsList=res.data.message;
                res.data.message.forEach(goods => goods.isSelected = true);//给每项添加isSelected属性========
            })
        },
        getGoodsById(id){//根据id获取存在localstorage里面的数量，===>获取回来的是字符串，一定要转对象
            return JSON.parse(this.store.get('goods'))[id];
        }
        
    },
    created(){
        this.getGoods();
    },
    computed:{
        //遍历勾选上的商品，通过id获取存在localstorage里面的数量，跟返回的价格计算出总价
        // selectedGoodsTotal(){//数量
        //     let sum=0;
        //     this.buyGoodsList.forEach((goods)=>{
        //         // console.log(goods.id.toString());
        //         if(goods.isSelected){
        //             sum+=this.getGoodsById(goods.id);
        //         }
        //     })
        //     return sum;
        // },
        selectedGoodsTotal() {//==============>此方法？
            return this.buyGoodsList.reduce((sum, goods) => {
                return goods.isSelected? sum + this.getGoodsById(goods.id) : sum;
            }, 0);
        },
        selectedGoodsPriceTotal(){//总价
            let sum=0;
            this.buyGoodsList.forEach((goods)=>{
                // console.log(goods.id.toString());
                if(goods.isSelected){
                    sum+=(this.getGoodsById(goods.id)*goods.sell_price);
                }
            })
            return sum;
        }
    }
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

