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
  "query": "(rain OR snow) profile_region:Colorado"
}

//@@domain_main
//@@product

// request options
var request_options = {
  url: 'https://' + search_config['url'] + search_config['env'] + '.json', 
  oauth: search_auth,
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
