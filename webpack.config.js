const path = require('path');

module.exports = {
    entry: ['/lib/components/index.js', 'babel-polyfill'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }],
    },
};