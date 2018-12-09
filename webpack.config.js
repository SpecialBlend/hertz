const path = require('path');

module.exports = {
    entry: './index.js',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build'),
        filename: 'handler.js',
    },
};
