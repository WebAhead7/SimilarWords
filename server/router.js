const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const dataHandler = require('./handlers/dataHandler');
const missingHandler = require('./handlers/missingHandler');

const autocomplete_api = `https://api.datamuse.com/words?ml=${name.query.name}`;
const similar_words_api = `https://api.datamuse.com/sug?s=${name.query.name}`;
const autocomplete_funcionkkkkk = curr => curr.map((curr) => ` ${curr.word} (${(curr.tags).toString()}) `);
const similar_words_funcion = curr => curr.map((curr) => curr.word);

const router = (req, res) => {
  const { url } = req;

  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url.includes('/data')) {
    dataHandler(req, res, similar_words_funcion, similar_words_api);
  } else if (url.includes('/curr')) {
    dataHandler(req, res, autocomplete_funcion, autocomplete_api);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
