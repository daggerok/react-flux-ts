const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'cheap-module-source-map',

  entry: {
    app: './src/index.tsx'
  },

  output: {
    path: './dist/',
    filename: '/[name].js',
    // save maps outside build folder
    sourceMapFilename: '/maps[file].map'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      //
      // "file-loader": "^0.8.5",
      // "url-loader": "^0.5.7",
      {test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/, loader: 'file'},
      //
      // {test: /\.css$/, loader: 'style-loader!css-loader'},
      // Extract css files
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize')},
      //
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {test: /\.js$/, loader: 'source-map-loader'}
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        quoteCharacter: '"',
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      // react
      {from: 'node_modules/react/dist/react.min.js', to: 'vendor'},
      {from: 'node_modules/react-dom/dist/react-dom.min.js', to: 'vendor'},
      {from: 'node_modules/flux/dist/Flux.min.js', to: 'vendor'},
      // jquery
      {from: 'node_modules/jquery/dist/jquery.min.js', to: 'vendor'},
      // bootstrap
      {from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'vendor/bootstrap'},
      {from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'vendor/bootstrap'},
      {from: 'node_modules/bootstrap/dist/fonts', to: 'vendor/bootstrap'}
    ]),
    new ExtractTextPlugin('/app.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jquery',
    'flux': 'Flux'
  },

  devServer: {
    watchDelay: 100,
    progress: true,
    inline: true,
    port: 8000,
    proxy: {
      '/author': 'http://localhost:8080',
      '/message': 'http://localhost:8080'
    }
  }
};
