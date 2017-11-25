import HomeComponent from "../component/home/home.vue";
import NewsListComponent from "../component/news/newsList.vue";
import NewsDetailComponent from "../component/news/newsDetail.vue";
import PhotoListComponent from "../component/photos/photo_list.vue";
import PhotoDetailComponent from "../component/photos/photo_detail.vue";
import buyComponent from "../component/buy/buy.vue";
import buyDetailComponent from "../component/buy/buyDetail.vue";
import shopCarComponent from "../component/shopCar/shopCar.vue";
import settingComponent from "../component/setting/setting.vue";






export default{
    linkActiveClass:'mui-active',
    routes:[
        //主页
        {path:'/',redirect:'/index'},
        {path:'/index',component:HomeComponent},
        //新闻
        {path:'/news/list',component:NewsListComponent},
        {name:'newsDetail',path:'/news/detail/:id',component:NewsDetailComponent},
        //图片
        {name:'pl',path:'/photo/photo_list',component:PhotoListComponent},
        {name:'pd',path:'/photo/photo_detail/:id',component:PhotoDetailComponent},
        //商品购买
        {name:'buy',path:'/buy',component:buyComponent},
        {name:'buyD',path:'/buy/buyDetail/:id',component:buyDetailComponent},
        

        //购物车
        {name:'shopC',path:'/shopCar',component:shopCarComponent},


        //设置
        {name:'setting',path:'/setting',component:settingComponent},
        
        
    ]
}