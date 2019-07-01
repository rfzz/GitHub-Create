const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,//自动打开浏览器
        port:100,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),  //启用热更新的第3步

        new htmlWebpackPlugin({//创建一个在内存中生成页面的插件
            template:path.join(__dirname,'./src/index.html'),
            
            filename:'index.html'

        })
    ],
    module:{//用于配置第三方模块加载器
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader'] },
            {test:/\.sass$/,use:['sass-loader','style-loader','css-loader'] },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/ },
            {test:/\.vue$/,use:'vue-loader'},
        ]

    },
    resolve:{
        alias:{
           /*  "vue$":"vue/dist/vue.js" */
        }
    }
}