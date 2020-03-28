const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = env => {
  if (env.NODE_ENV === 'dev') {
    return {
      entry: './index.js',
      mode: 'developement',
      target: 'node',
      externals: [nodeExternals()],
      output: {
        path: path.join(__dirname, '/bundels'),
        publicPath: '/',
        filename: 'build.dev.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          PORT: 3000,
          'process.env': {
            NODE_ENV: JSON.stringify('dev'),
          },
        }),
      ],
    };
  }
  if (env.NODE_ENV === 'prod') {
    return {
      entry: './index.js',
      mode: 'production',
      target: 'node',
      externals: [nodeExternals()],
      output: {
        path: path.join(__dirname, '/bundels'),
        publicPath: '/',
        filename: 'build.prod.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          PORT: 3000,
          'process.env': {
            NODE_ENV: JSON.stringify('prod'),
          },
        }),
      ],
    };
  }
};
