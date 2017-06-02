var webpack = require('webpack');

module.exports = {

    entry: '.app/main.ts',
    output: {
        path: '.dist',
        filename: 'app.bundle.js'
    },
     devServer: {
        inline: false,
        contentBase: ".dist",
        port: 3000
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
};