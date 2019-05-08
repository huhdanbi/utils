import glob from 'glob';

const entryArr = glob.sync('makeUtils/**/**/**/*.js');
const arr = [];

entryArr.map((el, i) => {
  const splitArr = el.split('/');
  const key = splitArr[2];
	const val = splitArr.pop();

	const obj = {};
	obj[key] = val;
	arr.push(obj);
});

const result = (dirPath) => {
	return arr.reduce((acc, obj) => {
		const objKey = Object.keys(obj)[0];
		const objVal = `${dirPath}/${objKey}/js/${obj[objKey]}`; 
		
		if (!acc[objKey]) {
			acc[objKey] = [];
		}
		acc[objKey].push(objVal);
		console.log(acc);
		return acc;
	}, {});
}

export default result;