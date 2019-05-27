const http = require('http');
const url = require('url');
　
const start = (route, handle) => {
    http.createServer((req, res) => {
        const pathname = url.parse(req.url).pathname;
        route(handle, pathname, res, req);
    }).listen(4000);
}
　
exports.start = start;