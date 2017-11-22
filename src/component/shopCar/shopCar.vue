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
              <div class="mui-numbox"> <button class="mui-btn mui-btn-numbox-minus">-</button> <input class="mui-input-numbox" type="number"> <button class="mui-btn mui-btn-numbox-plus">+</button> </div>
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
    }
}
</script>

<style>

</style>
