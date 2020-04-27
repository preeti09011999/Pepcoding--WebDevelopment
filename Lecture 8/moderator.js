let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();
let cFile = process.argv[2];
let uToAdd =process.argv[3];
(async function(){
    try{
        let data = await fs.promises.readFile(cFile);
        let {url, pwd, user} = JSON.parse(data);
        await driver.get(url);
        let unInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-1"));
        let psInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-2"));
        let unNpsEl = await Promise.all([unInputWillBeFoundPromise,psInputWillBeFoundPromise]);
        let uNameWillBeSendPromise= unNpsEl[0].sendKeys(user);
        let pWillBeSendPromise= unNpsEl[1].sendKeys(pwd);
        await Promise.all([uNameWillBeSendPromise,pWillBeSendPromise]);
        let loginBtn = await driver.findElement(swd.By.css("button[data-analytics=LoginPassword]"))
        await loginBtn.click();
        // console.log("we have logged in");
        let adminLnkanchor = await driver.findElement(swd.by.css("a[data-analytics=NavBarProfileDropDownAdministration]"))
        let adminPageUrl = await adminLinkanchor.getAttribute("href");
        await driver.get(adminPageUrl);
        let manageContestTab = await driver.findElement(swd.By.css("#content > div > div > div > section > header > ul > "))
    }catch(err){
        console.log(err)
    }

})()