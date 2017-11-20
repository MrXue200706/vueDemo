import HomeComponent from "../component/home/home.vue";
import NewsListComponent from "../component/news/newsList.vue";
import NewsDetailComponent from "../component/news/newsDetail.vue";



export default{
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:HomeComponent},

        {path:'/news/list',component:NewsListComponent},
        {name:'newsDetail',path:'/news/detail/:id',component:NewsDetailComponent}
    ]
}