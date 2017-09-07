# Twitter Search scripts

Simple Node scripts for Twitter Search. 

*User story: “As a developer wanting to exercise a Twitter Search API, I need an example script that I can quickly configure and start making API requests, and see the raw JSON output.”*

These Node scripts can be used to start making Search API requests. These scripts can be easily configured and quickly ran to collect data. Using Node.js, these are intended to illustrate the fundamentals of writing API client code. 

In theory, these could provide the bedrock to start building on. However, these do not do any logging, there is no real error handling, and you may not want to use *environment variables* as the configuration mechanism.

So likely the next steps are for the user to implement logging, configuration management, error handling, and data management.

## Getting started. 
The first step is making sure you have all the neccessary keys and tokens to authenticate with the Twitter API. 

Currently these scripts import authentication metadata from *environmental variables*. 

### Environment variables

These scripts load authentication details and settings from *environment variables*. 

The *search.js* uses POST requests, and *search_get.js* using GET requests. If you are using these scripts, which use OAuth, the following variables need to be set:

```
#Twitter Search 
TWITTER_SEARCH_URL='' 
ENV=''
CONSUMER_KEY=''
CONSUMER_SECRET=''
ACCESS_TOKEN=''
ACCESS_TOKEN_SECRET=''
```

If you are using the *search_des.js* script for the Enterprise Search product, the following variables need to be set:

```
#DES
DES_SEARCH_URL=''
PRODUCT=''
ACCOUNT_NAME=''
STREAM_NAME=''
USER_NAME=''
PASSWORD=''
```
