let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("Before");
request("https://www.espncricinfo.com/series/19322/commentary/1187683",function (err,res,html) {
    if(err === null && res.statusCode === 200){
        fs.writeFileSync("index.html",html);
            parseHtml(html);
        
    }else if(res.statusCode === 404){
        console.log("Invalid URL");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtml(html){
    console.log("------------------------------------------------------------------------");
    let $ = cheerio.load(html);
    // let headings = $("#global-header .container h1");
    let itemWrapper = $(".item-wrapper .description");
    let text = $(itemWrapper[0]).text();

    // let text = headings.text();
    console.log(text);
}
console.log("After");
