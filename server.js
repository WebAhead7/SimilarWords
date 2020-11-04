const http = require('http');
const router = require('./router');

const port = process.env.PORT || 3000;

const hostname = process.env.HOSTNAME || 'localhost';
const server = http.createServer(router);
// eslint-disable-next-line no-console
console.log(`Listening on http://${hostname}:${port}`);

server.listen(port);
