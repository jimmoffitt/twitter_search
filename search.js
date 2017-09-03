var nconf = require('nconf')
var request = require("request")

// load config
nconf.file({ file: 'config.json' }).env()

// twitter authentication
var twitter_oauth = {
  consumer_key: nconf.get('TWITTER_CONSUMER_KEY'),
  consumer_secret: nconf.get('TWITTER_CONSUMER_SECRET'),
  token: nconf.get('TWITTER_ACCESS_TOKEN'),
  token_secret: nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
}

// build request
var request = {
  "query": "(rain OR snow) profile_region:CO"
}

// request options
var request_options = {
  url: 'https://developers.twitter.com/search',
  oauth: twitter_oauth,
  json: true,
  headers: {
    'content-type': 'application/json'
  },
  body: request
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

