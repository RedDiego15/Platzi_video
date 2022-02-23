/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                test:/\.s?css$/,
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
                    from: path.resolve(__dirname, "src","assets/images"),
                    to: "assets/images"
                }

            ]

        }),
        new Dotenv(),
    ],
    

}
