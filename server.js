const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);

const PORT = 3000;

server.listen(PORT);
