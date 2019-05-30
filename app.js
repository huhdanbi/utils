const glob = require('glob');
const server = require('./server');
const router = require('./router');
const reqHandler = require('./reqHandler');

const getHTML = glob.sync('makeUtils/**/**/**/*.html');
const folderArr = getHTML.map((e) => {
    return e.split('makeUtils/')[1];
});

let handle = {};
folderArr.map((e, i) => {
  const idxName = e.split('/');
  const fileName = idxName[idxName.length -1].split('.')[0];
  fileName == 'index' ? handle[`/${e.split(idxName[idxName.length -1])[0]}`] = reqHandler[e] : handle[`/${e}`] = reqHandler[e];
});

console.log('connecting server 4000');

server.start(router.route, handle);