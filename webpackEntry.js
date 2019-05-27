import glob from 'glob';

const entryArr = glob.sync('makeUtils/**/**/**/*.js');
const arr = [];

entryArr.map((el, i) => {
	const obj = {};
	const key = el.split('/')[2];
	const idxOf = el.indexOf(key);	
	const val = el.substr(idxOf + key.length);

	if( key.indexOf('bundle') <= 0 ){
		obj[key] = val;
		arr.push(obj);
	}
	
});

const setWebpackEntries = (dirPath) => {
	return arr.reduce((acc, obj) => {
		const objKey = Object.keys(obj)[0];
		const objVal = `${dirPath}/${objKey}/${obj[objKey]}`; 
		if (!acc[objKey]) {
			acc[objKey] = [];
		}
		acc[objKey].push(objVal);
		return acc;
	}, {});
}

export default setWebpackEntries;