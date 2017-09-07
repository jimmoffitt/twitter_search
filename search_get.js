//Demonstrates making a GET request to Twitter Search.

var request = require("request")

//Twitter OAuth
var search_auth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.ACCESS_TOKEN,
  token_secret: process.env.ACCESS_TOKEN_SECRET
}

//Product details
var search_config = {
  url: process.env.TWITTER_SEARCH_URL,
  env: process.env.ENV
}

// build request <-- input
var query = {
  "query": "%28snow%20OR%20rain%29%20has%3Amedia" //Rule is URL encoded
}

// request options
var request_options = {
  //GET form with query included in URL.
  url: 'https://' + search_config['url'] + search_config['env'] + '.json?query=' + query['query'],
  oauth: search_auth,
  json: true,
  headers: {
    'content-type': 'application/json'
  }
}

//GET request
request(request_options, function (error, response, body) {

  //console.log(request_options['url'])

  if (error) {
    console.log('Error making search request.')
    console.log(error)
    return
  }

  console.log(body);
})
