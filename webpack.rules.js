module.exports = rules = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    exclude: /(.webpack|node_modules)/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules|.webpack)/,
    loaders: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }]
  },
  {
    test: /\.(scss|css)$/,
    use: [
      {
        // translates CSS into CommonJS
        loader: 'style-loader',
        options: { sourceMap: true }
      },
      {
        // translates CSS into CommonJS
        loader: 'css-loader',
        options: { sourceMap: true }
      },
      {
        // compiles Sass to CSS
        loader: 'sass-loader',
        options: { sourceMap: true }
      },],
  },
  {
    test: /\.(svg|ico|icns)$/,
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  },
  {
    test: /\.(jpg|gif|png)$/,
    use: {
      loader: "file-loader",
      options: {
        name(file) {
          return '[hash].[ext]';
        },
        limit: 1e5,
        outputPath: 'imgs',
        publicPath: '/imgs'
      },
    }
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        }
      }
    ]
  },

];