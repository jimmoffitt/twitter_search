var request = require("request")

var des_auth = {
  user_name: process.env.USER_NAME,
  password: process.env.PASSWORD
}

var des_config = {
  product: process.env.PRODUCT, //FAS, 30Day  --> 30day, fullarchive
  account_name: process.env.ACCOUNT_NAME,
  stream_name: process.env.STREAM_NAME,
 }

//var des_config = {
//  product: process.env.PRODUCT, //FAS, 30Day  --> 30day, fullarchive
//  account_name: process.env.ACCOUNT_NAME,
//  stream_name: process.env.STREAM_NAME,
// }

// build request
var request = {
  "query": "(rain OR snow) profile_region:CO"
}

//https://gnip-api.twitter.com/search/<PRODUCT>/accounts/<ACCOUNT_NAME>/<STREAM_NAME>.json
//30day/accounts/myAccount/prod.json
//fullarchive/accounts/myAccount/prod.json

// request options
var request_options = {
  url: 'https://gnip-api.twitter.com/search/' + des_config['product'] + '/accounts/' + des_config['account_name'] + '/' + des_config['stream_name'] + '.json',
  auth: des_auth,
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
