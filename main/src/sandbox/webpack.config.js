const webpack = require("webpack");
console.log("######3", __dirname);
module.exports = {
    entry: "./src/sandbox/indexsandbox.js",
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
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: __dirname,
        hot: true
    }
};
