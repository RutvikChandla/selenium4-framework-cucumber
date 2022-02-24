exports.config = {
  server: 'hub-cloud.browserstack.com',
  capabilities: [{
    'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Sierra",
      "buildName" : "Final-Snippet-Test",
      "sessionName" : "Selenium-4 cucumberjs local test",
      "local" : "true",
      "seleniumVersion" : "4.0.0",
      "userName" : "",
      "accessKey" : "",
    },
    "browserName" : "Chrome",
    "browserVersion" : "latest",
  }
  ]
}
