const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/index.html',
			filename: './index.html',
		}),
	],
};
