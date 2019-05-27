import setWebpackEntries from './webpackEntry';
import path from 'path';

const dir_js = path.resolve(__dirname, 'makeUtils/workFolder/');
const dir_build = path.resolve(__dirname, 'makeUtils/workFolderDist');

module.exports = {
	entry: setWebpackEntries(dir_js),
	output: {
		path: dir_build,
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}]
		}
};