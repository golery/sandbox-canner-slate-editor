module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
        library: 'GoleryEditor',
        libraryTarget: 'umd',
    },
    externals: [
        "react",
        "react-dom",
        "react-dom/server",
        "lodash",
        "moment"
    ],
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
    }
};