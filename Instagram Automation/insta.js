let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let fs = require("fs");
let pUrl = process.argv[3];
let nPost = process.argv[4];
(async function () {
  // browser create => icognito mode,fullscreen
  try {
    let data = await fs.promises.readFile(cFile);
    let { url, pwd, user } = JSON.parse(data);
    // launch browser
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized", "--disable-notifications"]
    });
    // tab
    let tabs = await browser.pages();
    let tab = tabs[0];
    // dom => html 
    //  browser=> 500ms request 
    // hk login page
    await tab.goto(url, { waitUntil: "networkidle2" });
    await tab.waitForSelector("input[name=username]");
    await tab.type("input[name=username]", user, { delay: 120 });
    await tab.type("input[type=password]", pwd, { delay: 120 });
    //  _1xnd => group of post 
    // _4-u2 _4-u8=> particular post
    //  inside ._1xnd
    // descendent => select 
    // 1xnd => last
    await Promise.all([
      tab.click(".sqdOP.L3NKy.y3zKF "), tab.waitForNavigation({
        waitUntil: "networkidle2"
      })
    ])
    await tab.goto(pUrl, { waitUntil: "networkidle2" });
    
    
  } catch (err) {
    console.log(err)
  }
})()