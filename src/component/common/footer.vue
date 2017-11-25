<template>
    <footer>
        <nav class="mui-bar mui-bar-tab">
            <router-link class='mui-tab-item' to="/index" >
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/buy">
                <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                <span class="mui-tab-label">商品购买</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar" >
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/setting" >
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
        <i></i>
    </footer>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style scoped>
footer i{
    display: block;
    height: 50px;
}
</style>
