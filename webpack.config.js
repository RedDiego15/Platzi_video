/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/js/index.js',
    output:{ 
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    mode: "production",
    resolve :{
        extensions: ['.js'],
        alias: {
            '@styles': path.resolve(__dirname, './src/css/'),
            '@js': path.resolve(__dirname, './src/js/'),
            '@templates': path.resolve(__dirname, './src/js/templates/')
        }   
    }, 
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    ],
            
            },
            {
                test: /\.png|\.jpg|\.svg$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename:'./index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/login.html',
            filename:'./login.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/register.html',
            filename:'./register.html'
        }),

        new CopyPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, "src","assets"),
                    to: "assets"
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename:'src/styles.css'
        }),
        new Dotenv()
    ],
    optimization: {
        minimize:true,
        minimizer:[new CssMinimizerPlugin(),new TerserPlugin()],
        splitChunks: {
            chunks:'all'
        }
    }
    

}