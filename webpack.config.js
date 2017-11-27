const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const LiveReloadPlugin = require('webpack-livereload-plugin');
const hosts = require('./hosts');

module.exports = {
  entry: {
    app: ['./src/main.js'],
    vendor: [
      'vue',
      'axios',
      'underscore',
      'moment',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: `${hosts.static}/static/admin`,
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[path][name]-[hash:4].[ext]',
          // useRelativePath: true,
          // path: '/',
        },
      },
      {
        test: /\.less$/,
        use: [
          // { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  resolve: {
    // extensions: ['.js', '.json', '.vue', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~assets': path.resolve(__dirname, './src/assets/'),
      '~legacy': path.resolve(__dirname, './src/assets/legacy/'),
      '~components': path.resolve(__dirname, './src/components/'),
      '~plugins': path.resolve(__dirname, './src/plugins/'),
      '~mixins': path.resolve(__dirname, './src/mixins/'),
      styles: path.resolve(__dirname, './src/styles/'),
    },
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      NET_DELAY: 2,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    // new LiveReloadPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: true,
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
