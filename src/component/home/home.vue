<template>
    <article>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='item in swiper' v-bind:key="item.url">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>
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
