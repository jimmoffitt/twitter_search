# twitter_search

Simple Node scripts for Twitter Search. 

*User story: “As a developer wanting to exercise a Twitter Search API, I want an example script that I can quickly configure and start making API request, and see the raw output.”*

These Node scripts are used to start making Search API requests. These examples are scripts that can be easily configured and quickly ran to collect data. Using Node.js, these are intended to illustrate the fundamentals of writing API client code. 

In theory, these could provide the bedrock to start building on. However, these do not do any logging, there is no real error handling, and you may not want to use *environmental variables* as the configuration mechanism.

So likely the next steps are for the user to implement logging, configuration management, error handling, and data management.

## Getting started. 
The first step is making sure you have all the neccessary keys and tokens to authenticate with the Twitter API. 

Currently these scripts import authentication metadata from *environmental variables*. 

### Environmental variables

These scripts load authentication details and settings from *environmental variables*. So, set the following variables to get started: 

```
#Twitter Search 
TWITTER_SEARCH_URL='' 
CONSUMER_KEY=''
CONSUMER_SECRET=''
ACCESS_TOKEN=''
ACCESS_TOKEN_SECRET=''

#DES
DES_SEARCH_URL=''
PRODUCT=''
ACCOUNT_NAME=''
STREAM_NAME=''
USER_NAME=''
PASSWORD=''
```
