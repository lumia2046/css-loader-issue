path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;
var host = 'localhost'

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log("当前运行环境：", isPro ? 'production' : 'development')

const extractModuleCSS = new ExtractTextPlugin('cssModuleStyles.css');
const extractGlobalCSS = new ExtractTextPlugin('cssGlobalStyles.css');
const extractLESS = new ExtractTextPlugin('lessStyles.css');

var plugins = [
    extractGlobalCSS,
    extractModuleCSS,
    extractLESS,
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    //DefinePlugin 在原始的源码中执行查找和替换操作，在导入的代码中，
    // 任何出现 process.env.NODE_ENV的地方都会被替换为nodeEnv变量转成的json字符串
    new webpack.DefinePlugin({
        // 定义全局变量
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    })
]



var app = ['./index']
if (isPro) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false
        })
    )
} else {

    app.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://' + host + ':3456', 'webpack/hot/only-dev-server')
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: isPro ? 'source-map' : 'inline-source-map',
    entry: {
        app: app
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: isPro ? './build/' : '/build/',
        chunkFilename: '[name].js'
    },
    // BASE_URL是全局的api接口访问地址
    plugins,
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            //当import 'redBoxBlackStyle' 时，webpack就会自动找根文件夹下面的redBoxBlackStyle.js
            redBoxBlackStyle: path.join(__dirname, 'redBoxBlackStyle.js')
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true'
            }
        }, {
            test: /\.css$/,
            include: /(src\\components|src\\containers)/,
            use: ['css-hot-loader'].concat(extractModuleCSS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]"
                }, {
                    loader: "postcss-loader"
                }]
            })
            )
        }, {
            test: /\.css$/,
            include: /(src\\styles)/,
            use: ['css-hot-loader'].concat(extractGlobalCSS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            })
            )
        }, {
            test: /\.less$/,
            include: /node_modules/,
            use: ['css-hot-loader'].concat(extractLESS.extract({
                use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            })
            )
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['url-loader?limit=10000&name=files/[md5:hash:base64:10].[ext]']
        }]
    },
    devServer: {
        hot: true,
        host: host,
        compress: true,
        port: 3456,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/build/',
        stats: {
            modules: false,
            chunks: false
        },
    },
}
