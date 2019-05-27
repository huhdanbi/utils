const fs = require('fs');
const glob = require('glob');

const getHTML = glob.sync('makeUtils/**/**/**/*.html');

const reqHandler = getHTML.reduce((acc, curr) => {
  const folder = curr.split('/')[2];

  acc[folder] = (res) => {
    fs.readFile(`${curr}` , (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data)
    });
  };
  return acc;
}, {});

module.exports = reqHandler;
