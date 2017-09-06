var request = require("request")

//Basic Auth
var des_auth = {  
  user_name: process.env.USER_NAME,
  password: process.env.PASSWORD
}

//Product details
var des_config = {
  URL: process.env.DES_SEARCH_URL, 
  product: process.env.PRODUCT, //30day, fullarchive
  account_name: process.env.ACCOUNT_NAME,
  stream_name: process.env.STREAM_NAME,
 }

// build request --> input 
var query = {
  "query": "(rain OR snow) profile_region:Colorado has:media"
}

//@@domain_main = 'gnip-api.twitter.com/search/'
//@@product

//https://gnip-api.twitter.com/search/<PRODUCT>/accounts/<ACCOUNT_NAME>/<STREAM_NAME>.json
//With <ACCOUNT_NAME> = 'myAccount' and <STREAM_NAME> = 'dev':
//30day/accounts/myAccount/dev.json
//fullarchive/accounts/myAccount/dev.json

// request options
var request_options = {
  //Basic Auth
  url: 'https://' + des_auth['user_name'] + ":" + des_auth['password'] + '@' + des_config['URL'] + des_config['product'] + '/accounts/' + des_config['account_name'] + '/' + des_config['stream_name'] + '.json',
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
