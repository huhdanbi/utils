const glob = require('glob');
const server = require('./server');
const router = require('./router');
const reqHandler = require('./reqHandler');

const getHTML = glob.sync('makeUtils/**/**/**/*.html');
const folderArr = getHTML.map((e) => {
    return e.split('/')[2];
});

let handle = {};
folderArr.map((e, i) => {
  handle[`/${e}`] = reqHandler[e];
});
console.log('connecting server 4000');

server.start(router.route, handle);