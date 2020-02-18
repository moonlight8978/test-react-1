const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SOURCE_DIR = 'src/'

const makeHtmlOptions = options => {
  const { identity, ...overrides } = options

  return {
    inject: false,
    template: htmlWebpackTemplate,
    filename: `${identity}.html`,
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
    ],
    links: [
      'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap&subset=vietnamese',
    ],
    lang: 'vi-VN',
    appMountId: 'app',
    ...overrides,
  }
}

const mdPathTransformer = filePath => {
  const parts = filePath.replace(SOURCE_DIR, '').split('/')
  const newPath = parts.slice(0, parts.length - 1).join('/')
  return `${newPath}.md`
}

const outputName = (isEnvProduction, ext) =>
  isEnvProduction ? `[name].[contenthash].${ext}` : `[name].${ext}`

module.exports = webpackEnv => {
  const isEnvProduction = webpackEnv === 'production'
  const isEnvDevelopment = webpackEnv === 'development'

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    entry: {
      index: './src/index.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(
        makeHtmlOptions({
          identity: 'index',
          title: 'Home',
        })
      ),
      new CopyPlugin([
        'public',
        {
          from: './src/**/*.md',
          to: 'contents',
          transformPath: mdPathTransformer,
        },
      ]),
      new MiniCssExtractPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: outputName(isEnvProduction, 'js'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /(?<!\.module)\.s?css$/,
          use: [
            isEnvDevelopment && 'style-loader',
            isEnvProduction && {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '/assets' },
            },
            { loader: 'css-loader', options: { sourceMap: isEnvDevelopment } },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { sourceMap: isEnvDevelopment },
            },
          ].filter(Boolean),
        },
        {
          test: /\.module.(scss|css)$/,
          use: [
            isEnvDevelopment && 'style-loader',
            isEnvProduction && {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '/assets' },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]_[local]--[hash:base64:5]',
                  context: path.resolve(__dirname, 'src'),
                },
                sourceMap: isEnvDevelopment,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { sourceMap: isEnvDevelopment },
            },
          ].filter(Boolean),
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(md|txt|ya?ml)$/,
          loader: 'raw-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: isEnvDevelopment && 'inline-source-map',
    devServer: {
      contentBase: './build',
      hot: true,
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true,
    },
  }
}
