const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	// devtool: 'eval-source-map',
	// devtool: false,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.join(__dirname, 'src')],
				use: [{
					loader: 'babel-loader'
				}],
			},
			{
				test: /\.css$/,
				exclude: /node_modules(?!(\/|\\)normalize\.css)/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}

		]
	},
	devServer: {
		hot: true,
		inline: true,
		stats: 'errors-only',
	}
};