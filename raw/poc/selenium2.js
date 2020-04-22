require("chromedriver");
let fs = require("fs");
let swd = require("selenium-webdriver");
let credentialsFile = process.argv[2];
let username,password;
//browser build
let bldr = new swd.Builder();
//tab
let driver = bldr.forBrowser("chrome").build();
//promise => page open future
//value => value
//pending
let credentialsWillBeReadPromise = fs.promises.readFile(credentialsFile);
credentialsWillBeReadPromise.then(function(credentials){
    credentials = JSON.parse(credentials);
    username = credentials.username
    password = credentials.password

let googlePageWillBeOpenedPromise = driver.get("https://www.pepcoding.com/login");
return googlePageWillBeOpenedPromise
})
.then(function(){
    // search email
    //email find promise
    let emailWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=email]"))
    return emailWillBeSelectedPromise;
}).then(function(emailElement){
    let abracadabraWillBeSendPromise = emailElement.sendKeys(username);
    return abracadabraWillBeSendPromise;
}).then(function(){
    let passwordWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=password]"))
    return passwordWillBeSelectedPromise;
}).then(function (passwordElement) {
    let passwordWillBeEnteredPromise = passwordElement.sendKeys(password);
    return passwordWillBeEnteredPromise;
}).then(function(){
    let submitBtnWillSelected = driver.findElement(swd.By.css("button[type=submit]"));
    return submitBtnWillSelected;
}).then(function(submitBtn){
    let submitBtnWillBeClickedPromise = submitbtn.click();
    return submitBtnWillBeClickedPromise;
}).then(function () {
    console.log("First login attempt");
})

.catch(function (err) {
    console.log(err);
})
