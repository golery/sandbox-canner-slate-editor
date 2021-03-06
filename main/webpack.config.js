const path = require('path');
const config = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
        publicPath: "/",
        library: 'GoleryEditor',
        libraryTarget: 'umd',
        // https://github.com/webpack/webpack/issues/6784
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    devtool: "source-map",
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "react-dom/server": "react-dom/server",
        "lodash": "lodash",
        "moment": "moment"
    },
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
            // have shorter list of language for prism
            "prismjs/components.json":  path.resolve(__dirname, 'src/components/codeblock/prism/components.json')
        }
    }
};

module.exports = function (env, argv) {
    if (argv.mode === "production") {
        config.output.filename = "index.js";
        config.output.path += "/min";
        config.devtool = false;
    } else {
        config.output.filename = "index.js";
        config.output.path += "/dev";
        config.devtool = "source-map";
    }
    console.log(config);
    return config;
};