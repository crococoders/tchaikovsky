const path = require('path');

module.exports = {
    stories: ['../app/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push({
            test: /\.(scss|css)$/,
            use: [
                {
                    // translates CSS into CommonJS
                    loader: "style-loader",
                    options: { sourceMap: true },
                },
                {
                    // translates CSS into CommonJS
                    loader: "css-loader",
                    options: { sourceMap: true },
                },
                {
                    // compiles Sass to CSS
                    loader: "sass-loader",
                    options: { sourceMap: true },
                },
                {
                    loader: "sass-resources-loader",
                    options: {
                        // Provide path to the file with resources
                        resources: [path.resolve(__dirname, '../static/index.scss')]
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });
        return config;
    },
};