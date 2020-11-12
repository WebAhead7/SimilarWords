const https = require('https');
const url = require('url');
const fetchApi = require('./api');

const new_arr = curr => curr.map((curr) => ` ${curr.word} (${(curr.tags).toString()}) `);

function inputHandler(req, res) {
    fetchApi(req)
        .then(({ data }) => {
            const final_data = new_arr(JSON.parse(data));
            res.end(JSON.stringify(final_data))
        }).catch(err => (err => alert(error.message))
}

module.exports = inputHandler;
