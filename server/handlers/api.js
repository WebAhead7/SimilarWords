const https = require('https');
const url = require('url');

module.exports = (req, link) => new Promise((resolve, reject) => {
    const name = url.parse(req.url, true);
    https.get(link + `${name.query.name}`, (res) => {
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
