var request = require("request")

var twitter_oauth = {
  user_name: process.env.USER_NAME,
  password: process.env.PASSWORD,
  product: process.env.PRODUCT #FAS, 30Day  --> 30day, fullarchive
  account_name: process.env.ACCOUNT_NAME,
  stream_name: process.env.STREAM_NAME
}

// build request
var request = {
  "query": "(rain OR snow) profile_region:CO"
}

//https://gnip-api.twitter.com/search/<PRODUCT>/accounts/<ACCOUNT_NAME>/<STREAM_NAME>.json
//30day/accounts/myAccount/prod.json
//fullarchive/accounts/myAccount/prod.json

// request options
var request_options = {
  url: 'https://gnip-api.twitter.com/search/30day/accounts/jim/prod.json',
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

