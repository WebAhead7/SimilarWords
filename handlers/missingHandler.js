function missingHandler(req, res) {
  res.setHeader('content-type', 'text/html');
  res.end('<h1>Error</h1>');
}

module.exports = missingHandler;
