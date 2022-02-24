exports.config = {
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Sierra",
      "buildName" : "Final-Snippet-Test",
      "sessionName" : "Selenium-4 cucumber single snippet test",
      "local" : "false",
      "seleniumVersion" : "4.0.0",
      "userName" : "",
      "accessKey" : "",
    },
    "browserName" : "Chrome",
    "browserVersion" : "latest",
  }]
}