const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack Configuration
const webpackConfig = (mode) => {
  return {
    entry: './src/index.js',
    mode: mode,
    watch: mode === 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      open: true,
      host: 'localhost',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/style.css'
      })
    ],
    resolve: {
      extensions: ['.js', '...'],
    }
  }
}

// Mode Configuration
const mode = process.env.NODE_ENV ?? 'development'

// Grunt Configuration
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    "webpack": {
      options: {
        stats: mode === "development",
      },
      prod: webpackConfig('production'),
      dev: webpackConfig('development'),
    },
    "webpack-dev-server": {
      prod: webpackConfig('production'),
      dev: webpackConfig('development'),
    }
  });
  grunt.loadNpmTasks('grunt-webpack');
};