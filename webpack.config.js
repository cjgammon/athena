const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

let config = {
  context: __dirname,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  },
  output: {
    filename: 'athena.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = (env, argv) => {

  config.mode = argv.mode;

  if (argv.mode === 'development') {

    config.devtool = 'source-map';
    config.output.filename = 'athena.js';

  } else if (argv.mode == 'production') {

    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()]
    };

  }

  return config;
}