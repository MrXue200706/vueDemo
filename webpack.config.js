const path=require('path');
const HtmlWP=require('html-webpack-plugin');
const CleanWP=require('clean-webpack-plugin');

module.exports={
    //打包的入口,要用绝对路径，path.resolve(__dirname,url)转换为绝对路径
    entry:path.resolve(__dirname,'./src/js/main.js'),
    //输出路径,文件名
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //插件配置
    plugins:[
        //配置自动注入js的html
        new HtmlWP({
            template:'./src/index.html',//注入的html文件，打包后的html还是会去dist目录
            filename:'index.html',//打包后的文件名
            inject:'body'//注入js的位置
        }),
        //配置清理插件
        new CleanWP(['dist'])
    ],
    //loader模块配置
    module:{
        //模块规则
        rules:[
            {
                test:/\.css$/,
                use:[]
            }
        ]
    }
}