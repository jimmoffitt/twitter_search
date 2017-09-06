var request = require("request")

//Twitter OAuth 1.0 
var search_auth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.ACCESS_TOKEN,
  token_secret: process.env.ACCESS_TOKEN_SECRET
}

//Product details
var search_config = {
  URL: process.env.TWITTER_SEARCH_URL,
  product: process.env.PRODUCT, //recent, 30day, fullarchive
  account_name: process.env.ACCOUNT_NAME,
  stream_name: process.env.STREAM_NAME,
 }

// build request
var query = {
  "query": "(rain OR snow) profile_region:Colorado"
}

//@@domain_main
//@@product

// request options
var request_options = {
  url: process.env.TWITTER_SEARCH_URL, //[]TODO: update details, api endpoint oauth: search_oauth,
  json: true,
  headers: {
    'content-type': 'application/json'
  },
  body: query
}

// POST request
request.post(request_options, function (error, response, body) {
  
  if (error) {
    console.log('Error making search request.')
    console.log(error)
    return
  }

  console.log(body);
})
