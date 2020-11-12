const https = require('https');
const url = require('url');
const fetchApi = require('./api');

function inputHandler(req, res, new_arr) {
    fetchApi(req)
        .then(({ data }) => {
            const final_data = new_arr(JSON.parse(data));
            res.end(JSON.stringify(final_data))
        }).catch(err => (err => alert(error.message))
}

module.exports = inputHandler;
