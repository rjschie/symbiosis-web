const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  const entry = {
    app: './src/index.ts',
  };

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      excludeChunks: ['tests'],
    }),
    new CopyPlugin([{ from: 'public', to: '.' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ];

  // Include tests in development builds
  if (!IS_PRODUCTION) {
    entry.tests = glob.sync('./tests/**/*.test.js');

    plugins.push(
      new HtmlWebpackPlugin({
        filename: 'tests/index.html',
        template: './tests/index.html',
        inject: 'head',
        chunks: ['tests'],
      })
    );
  }

  return {
    mode: IS_PRODUCTION ? 'production' : 'development',
    entry,
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|mjs|ts)$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !IS_PRODUCTION,
              },
            },
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      allowedHosts: [
        'sjaelland.local',
        'localhost',
        '127.0.0.1',
        '192.168.86.163',
      ],
      host: '0.0.0.0',
    },
  };
};
