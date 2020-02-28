let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");
request("https://www.espncricinfo.com/series/19322/scorecard/1187679",
function(err,res,html){
    if(err == null && res.statusCode == 200){
        // fs.writeFileSync("abc.html",html);
        parseHtml(html);
    }else if(res.statusCode == 404){
        console.log("Page Not Found");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }

});

function parseHtml(html){
    // console.log("Parsing html");
    //html => convert $ => search
    let $ = cheerio.load(html);
    // let tableHtml = $(".scorecard-section.bowling").html();
    let tableArr = $(".scorecard-section.bowling table tbody tr");
    let maxWicketTaker ='';
    let maxWicket = 0;
    for(let i=0;i<tableArr.length;i++){
        let bowlerName = $(tableArr[i]).find("td a").html();
        // console.log(bowlerName);
        let wicket = $($(tableArr[i]).find("td")[5]).html();
        if(wicket>maxWicket){
            maxWicket=wicket;
            maxWicketTaker = bowlerName;
        }
    }

    console.log(maxWicketTaker + " " + maxWicket);
    // fs.writeFileSync("table.html",tableHtml);
    // console.log("File Written to disk");
}