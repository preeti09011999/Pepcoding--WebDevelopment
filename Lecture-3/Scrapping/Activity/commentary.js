let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");

request("https://www.espncricinfo.com/series/19322/commentary/1187679",
function(err,res,html){
    if(err==null&&res.statusCode == 200){
        parseHtml(html);
    }else if(res.statusCode == 404){
        console.log("Page not found");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }
});

function parseHtml(html){
    let $ = cheerio.load(html);
    let lastCommentary = $(".item-wrapper .description").html();
    fs.writeFileSync("commentary.html",lastCommentary);
        // console.log(tableArr);
}