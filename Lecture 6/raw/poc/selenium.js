require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

let googlePageWillOpenedPromise = driver.get("https://www.google.com");
googlePageWillOpenedPromise.then(function(){
    console.log("Google page opened");
})

googlePageWillOpenedPromise.catch(function () {
    console.log(err);
})