/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:{
        index: {import: './src/js/index.js'},
        sw:{import: './src/service-worker/sw.js'}
},
    output:{ 
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename:"assets/[hash][ext]",
        clean:true
    },
    mode: "production",
    resolve :{
        extensions: ['.js'],
        alias: {
            '@styles': path.resolve(__dirname, './src/css/'),
            '@js': path.resolve(__dirname, './src/js/'),
            '@templates': path.resolve(__dirname, './src/js/templates/'),
            '@assets': path.resolve(__dirname, './src/assets/')
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
                use:[//MiniCssExtractPlugin.loader,
                    'style-loader',
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
            filename:'./index.html',
            minify:true
        }),
        new CopyPlugin({
            patterns: [
                {
                from: path.resolve(__dirname, "src","assets"),
                to: "assets"
                }
            
            ]

        }),
        new MiniCssExtractPlugin({
            filename:'src/styles.css'
        }),
        new Dotenv(),
        
    ],
    optimization: {
        minimize:true,
        minimizer:[new CssMinimizerPlugin(),new TerserPlugin()],
        splitChunks: {
            chunks:'all'
        }
    }
    

}