let puppeteer = require("puppeteer");
(async function(){
    //browser open => visible 
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : null,
        args : ["--incognito","--start-maximized"]
    });
    let pages = await browser.pages();
    let apge = pages[0];
    await page.goto("https://www.google.com")
     
})();
