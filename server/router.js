const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const dataHandler = require('./handlers/dataHandler');
const missingHandler = require('./handlers/missingHandler');
const inputHandler = require('./handlers/inputHandler');

const router = (req, res) => {
  const { url } = req;

  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url.includes('/data')) {
    dataHandler(req, res, curr => curr.map((curr) => curr.word);
  } else if (url.includes('/curr')) {
    inputHandler(req, res, const new_arr = curr => curr.map((curr) => ` ${curr.word} (${(curr.tags).toString()}) `));
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
