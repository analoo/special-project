const request = require("request")
const keys = require("../private/keys")
const axios = require("axios")

module.exports = {
    find: (req, res) => {
        console.log(req.body)
        request(
            {
                url: 'https://api.foursquare.com/v2/venues/explore',
                method: 'GET',
                qs: {
                    client_id: keys.foursquare.clientID,
                    client_secret: keys.foursquare.clientSecret,
                    ll: req.body.ll,
                    query: req.body.query,
                    v: '20180323',
                    limit: 5,
                },
            },
            function (err, resp, body) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(body);
                }
                let val = JSON.parse(body);
                res.send({
                    totalResults: val.response.totalResults,
                    code: val.meta.code,
                    groups: val.response.groups
                })

            }
        );
    }

}