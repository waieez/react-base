module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./build/index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
