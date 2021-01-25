const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
    chunkFilename: 'app.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   hot: true,
  //   port: 3000,
  //   compress: true,
  //   historyApiFallback: true,
  //   open: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Platzigram',
      template: 'public/index.html',
    }),
    new WebpackPWAManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram',
      description:
        'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp(
            'https://https://petgram-server-24iykciv5.now.sh'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
}
