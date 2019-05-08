const path = require('path'); 
const glob = require('glob');

const dir_js  = path.resolve(__dirname, 'makeUtils/workFolder/');
const dir_build = path.resolve(__dirname, 'makeUtils/workFolder/dist');

const entryArr = glob.sync('makeUtils/**/**/**/*.js');
const arr = [];

entryArr.map((el, i) => {
  const splitArr = el.split('/');
  const key = splitArr[2];
  const val = splitArr.pop();

	if( key != 'dist'){
		const obj = {};
		obj[key] = val;
		arr.push(obj);
	}
});

console.log(entryArr)

const result = (dirPath) => {

	return arr.reduce((acc, obj) => {
		const objKey = Object.keys(obj)[0];
		const objVal = path.resolve( dir_js , `${objKey}/js/${obj[objKey]}`); 

		console.log(objVal);
		
		if (!acc[objKey]) {
			acc[objKey] = [];
		}
		acc[objKey].push(objVal);
		return acc;
	}, {});
}

module.exports = {
	entry: result(dir_js),
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