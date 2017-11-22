<template>
    <article>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='item in swiper' v-bind:key="item.url">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">首页</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/list">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">热点新闻</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/photo_list">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">图片</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">关于</div>
                </router-link>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    data(){
        return{
            swiper:[]
        }
    },
    methods:{
        getSwiper(){
            this.axios.get('http://vue.studyit.io/api/getlunbo')
            .then(res => this.swiper=res.data.message);
        }
    },
    created(){
        this.getSwiper();
    }
}
</script>

<style lang='less' scoped>
@height:260px;
article{
    height:@height;
    margin-top: 40px;
    img{
        width: 100%;
    }
}
</style>
