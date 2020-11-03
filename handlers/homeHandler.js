const fs = require('fs');
const path = require('path');

function homeHandler(request, res) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    res.setHeader('content-type', 'text/html');
    if (error) {
      res.end('<h1>Not found</h1>');
    } else {
      res.end(file);
    }
  });
}
module.exports = homeHandler;
