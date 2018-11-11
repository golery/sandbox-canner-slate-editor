const path = require('path');
const webpack = require("webpack");
console.log("######3", path.resolve('src/components/codeblock/languages.json'));
module.exports = {
    entry: "./src/sandbox/indexbrowser.js",
    output: {
        path: __dirname + "/",
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            "prismjs/components.json": '/work/golery-editor/main/src/components/codeblock/prism/components.json'
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, 'src', 'sandbox'),
        hot: true
    }
};
