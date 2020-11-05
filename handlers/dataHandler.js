const fs = require('fs');
const path = require('path');

function dataHandler(request, res) {
  const filePath = path.join(__dirname, '..', 'data.json');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.setHeader('content-type', 'text/html');
      res.end('<h1>Not found</h1>');
    } else {
      res.setHeader('content-type', 'application/json');
      res.end(file);
    }
  });
}
module.exports = dataHandler;
