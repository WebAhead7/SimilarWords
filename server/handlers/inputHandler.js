const https = require('https');
const url = require('url');

const fetchApi = (req) => new Promise((resolve, reject) => {
    const name = url.parse(req.url, true);
    https.get(`https://api.datamuse.com/words?ml=${name.query.name}`, (res) => {
        let new_data = "";
        res.on("data", chunk => {
            new_data += chunk;
        })
        res.on("end", () => {
            const statusCode = res.statusCode;
            resolve({ statusCode, data: new_data });
        })
    })
        .on("error", reject)
})
const new_arr = curr => curr.map((curr) => ` ${curr.word} (${(curr.tags).toString()}) `);

function inputHandler(req, res) {
    fetchApi(req)
        .then(({ data }) => {
            const final_data = new_arr(JSON.parse(data));
            res.end(JSON.stringify(final_data))
        }).catch(err => {

        })
}

module.exports = inputHandler;
