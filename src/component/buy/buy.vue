<template>
    <article>
        <ul class="mui-table-view mui-grid-view">
        <!-- 商品详情 -->
            <li v-for="item in goodsList" v-bind:key="item.id"
            class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link v-bind:to="{ name: 'buyD', params: { id: item.id } }">
                    <div class="mui-card">
                    <!-- 商品图片 -->
                        <div class="mui-card-header">
                            <img v-bind:src="item.img_url" alt="" />
                        </div>
                        <!-- 商品描述 -->
                        <div class="mui-card-footer ">
                            <p class="mui-ellipsis-2">{{ item.title }}</p>
                        </div>
                        <!-- 商品价格 -->
                        <div class="mui-card-content">
                            <p class="price">
                                <span>￥{{ item.sell_price }}</span>
                                <s>￥{{ item.market_price }}</s>
                            </p>
                            <p class="tip">
                                <span>热卖中</span>
                                <span>剩余{{ item.stock_quantity }}件</span>
                            </p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- 加载更多 -->
        <button v-on:click="loadMore()" v-bind:disabled="lastPage"
        class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">
            {{ lastPage? '已经是最后一页了': '加载更多' }}  
        </button>
  </article>
</template>

<script>
export default {
    data(){
        return{
            goodsList:[],
            lastPage:false,
            page:1,
        }
    },
    methods:{
        getGoodsList(){
            this.axios.get(`${this.api.goodsL}?pageindex=${this.page}`)
            .then(res => {
                this.goodsList.push(...res.data.message);
                if(res.data.message.length==0){
                    this.lastPage=true;
                }
                console.log(this.goodsList);
            })
        },
        loadMore(){
            this.page++;
            this.getGoodsList();

        }
    },
    created(){
        this.getGoodsList();
    }
};
</script>

<style>

</style>
