const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const dataHandler = require('./handlers/dataHandler');
const missingHandler = require('./handlers/missingHandler');

const autocomplete_api = `https://api.datamuse.com/words?ml=`;
const similar_words_api = `https://api.datamuse.com/sug?s=`;
const autocomplete_funcion = curr => curr.map((curr) => ` ${curr.word} (${(curr.tags).toString()}) `);
const similarwords_funcion = curr => curr.map((curr) => curr.word);

const router = (req, res) => {
  const { url } = req;

  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url.includes('autoComplete')) {
    dataHandler(req, autocomplete_funcion, autocomplete_api, res);
  } else if (url.includes('similarWords')) {
    dataHandler(req, similarwords_funcion, similar_words_api, res);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
