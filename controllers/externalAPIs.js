const request = require("request")
const keys = require("../private/keys")
const axios = require("axios")

module.exports = {
    find: (req, res) => {
        request(
            {
                url: 'https://api.foursquare.com/v2/venues/explore',
                method: 'GET',
                qs: {
                    client_id: keys.foursquare.clientID,
                    client_secret: keys.foursquare.clientSecret,
                    ll: "40.74224,-73.99386",
                    query: 'tacos',
                    v: '20180323',
                    limit: 10,
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