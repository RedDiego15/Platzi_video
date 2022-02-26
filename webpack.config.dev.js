/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/js/index.js',
    output:{ 
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    mode: "development",
    watch: true,
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
                    'css-loader',
                    ],
            
            },
            {
                test: /\.png|\.jpg$/,
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
    

}