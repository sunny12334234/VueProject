var path = require('path');
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path :path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000,
        open:true,
        contentBase:'src',
        hot:true,
        headers: {
            'X-foo':'bar'
          },
          host:'127.1.2.3',
        //   https:true,
          compress:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
              test: /\.(scss|sass)$/,
              use:['style-loader','css-loader','sass-loader']
          },
          {
              test: /\.less$/,
              use:['style-loader','css-loader','less-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif|bmp|webp)$/,
            use:['url-loader?limit=1024&name=[name].[ext]']
        },
        {
          test: /\.(ttf)$/,
          use:['file-loader?name=[name].[ext]']
      },
        {
            test: /\.js$/,
            use:'babel-loader',
            exclude:/node_modules/
            
        },{
            test: /\.vue$/,
            use:'vue-loader'
            
        }
        ]
      },
    //   resolve: {
    //     alias: {
    //       'vue$': 'vue/dist/vue.esm.js' 
    //     }
    //   }
}