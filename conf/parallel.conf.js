exports.config = {
  server: 'hub-cloud.browserstack.com',
  "userName" : "rutvikchandla_2MEern",
  "accessKey" : "AXHzyg34Qr81Nep231pu",
  commonCapabilities: {
    'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Sierra",
      "buildName" : "Final-Snippet-Test",
      "sessionName" : "Selenium-4 cucumber parallel snippet test",
      "local" : "false",
      "seleniumVersion" : "4.0.0",
      "userName" : "",
      "accessKey" : "",
    },
    "browserName" : "Chrome",
    "browserVersion" : "latest",
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'safari',
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
