# Introduction

This is a npm module for implementing authorization and authentication in any project.

# Installation

  - You can install the package by using the following command :
   ```npm install github:amanaryan29/gate-keeper#master --save``` 

# Usage

- This module require 3 configuration data to proceed:
    1. API Url (`baseURL`)
    2. Login Url (`loginURL`)
    3. Cookie Name (`cookieName`)
 
- Import the module to your `api.js` file.
eg: ```Import ApiWrapper from gate-keeper```
- Create an object which can have all the three configuration data.
eg: ```const config = {
  baseURL: '',
  loginURL: '',
  cookieName: ''
}```
- Create an Instance of ApiWrapper class and pass the config to it.
 eg: ```const apiwrapper = new ApiWrapper(config)```
- ApiWrapper will create an axios instance internally as `apiClient` and you can use it for api request.
eg: ```api = apiwrapper.apiClient```
- Export `api` to make it available throughout the project.
eg: ```export { api }```