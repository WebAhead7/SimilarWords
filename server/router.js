const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const dataHandler = require('./handlers/dataHandler');
const missingHandler = require('./handlers/missingHandler');

const router = (req, res) => {
  const { url } = req;

  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url === '/data') {
    dataHandler(req, res);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
