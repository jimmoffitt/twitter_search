var request = require("request")

var twitter_oauth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.ACCESS_TOKEN,
  token_secret: process.env.ACCESS_TOKEN_SECRET
}

// request options
var request_options = {
  url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterdev',
  oauth: twitter_oauth,
  json: true,
  headers: {
    'content-type': 'application/json'
  }
}

// POST request
request(request_options, function (error, response, body) {
  
  if (error) {
    console.log('Error making search request.')
    console.log(error)
    return
  }

  console.log(body);
})
