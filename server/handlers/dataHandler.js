const https = require('https');
const url = require('url');
const fetchApi = require('./api');

function dataHandler(req, res, new_arr, link) {
    fetchApi(req, link)
        .then(({ data }) => {
            const final_data = new_arr(JSON.parse(data));
            res.end(JSON.stringify(final_data))
        }).catch(error => alert(error.message))
}

module.exports = dataHandler;
