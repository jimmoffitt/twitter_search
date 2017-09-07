//Demonstrates making a POST request to Twitter Search.

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
  "query": "%28snow%20OR%20rain%29%20has%3Amedia"
}

// request options
var request_options = {
  //POST form with "body: query" below
  //url: 'https://' + search_config['url'] + search_config['env'] + '.json',
  //GET form with query included in URL.
  url: 'https://' + search_config['url'] + search_config['env'] + '.json?query=' + query['query'],

  oauth: search_auth,
  json: true,
  headers: {
    'content-type': 'application/json'
  },
  //body: query //Uncomment with POST requests.
}

// POST request
//request.post(request_options, function (error, response, body) {
//GET request
request(request_options, function (error, response, body) {

  console.log(request_options['url'])

  if (error) {
    console.log('Error making search request.')
    console.log(error)
    return
  }

  console.log(body);
})
