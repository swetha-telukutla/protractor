
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    directConnect: true,
    //for internet explorer we need to give localhost
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    //capabilities: {
     // 'browserName': 'chrome'
     // 'browserName': 'internet explorer'
     // 'browserName': 'firefox'
    
    //},
     // Capabilities to be passed to the webdriver instance.
     /*capabilities: {
      'browserName': 'chrome',
      shardTestFiles : true,
      maxInstances : 3,
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs:['bank_spec.js']
    /*suites:{
      BankManager: ['bank_spec.js','spec_customer.js'],
      customer:['spec_customer.js']
    },*/
     multiCapabilities: [
    {
        'browserName': 'chrome',
        specs :['spec_customer.js'] ,
    }, 
    {
        'browserName': 'firefox',
        specs :['bank_spec.js'] ,
    }
    ],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
  
  // onPrepare:function(){
  //       browser.ignoreSynchronization=true;
  //   }

     onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
          takeScreenshots: true//,
          //takeScreenshotsOnlyOnFailures: true
        })
      );
   },

};