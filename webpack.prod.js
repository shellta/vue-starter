var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader!tslint-loader',          
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name].[ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader',
        options: {
          name: 'static/fonts/[name].[ext]',
          limit: 30000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    host: '127.0.0.1',
    port: 8080,
    contentBase: './dist/'
  },
  performance: {
    hints: false
  },
  devtool: false,
  plugins: [
    new ExtractTextPlugin("static/css/app.[chunkhash].css"),
    new htmlWebpackPlugin({
      title: '',
      template: './src/static/template.html'
    })
  ]
  // stats: "errors-only"  
}

module.exports.plugins = (module.exports.plugins || []).concat([
  // new webpack.optimize.CommonsChunkPlugin({ 
  //   name: 'vendor' 
  // }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
])
