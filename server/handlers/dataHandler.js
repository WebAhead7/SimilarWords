const https = require('https');
const url = require('url');
const fetchApi = require('./api');

function dataHandler(req, new_arr, link, res) {
    fetchApi(req, link)
        .then(({ data }) => {
            const final_data = new_arr(JSON.parse(data));
            res.end(JSON.stringify(final_data))
        })
        .catch( (error) => {
            console.log(error.message);
            res.status(500).send('Something broke!');
    })
}

module.exports = dataHandler;
