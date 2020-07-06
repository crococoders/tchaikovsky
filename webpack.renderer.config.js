const rules = require("./webpack.rules");

const path = require('path');

function srcPaths(src) {
    return path.join(__dirname, src);
}

rules.push({
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
    mode: 'development',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules,
    },
    resolve: {
        alias: {
            '@main': srcPaths('app/main'),
            '@models': srcPaths('app/models'),
            '@renderer': srcPaths('app/renderer'),
            'react-dom': '@hot-loader/react-dom'
        },
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    },
};
