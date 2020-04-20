let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
// console.log("Before");
request("https://www.espncricinfo.com/series/19322/scorecard/1187683",function (err,res,html) {
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

    let $ = cheerio.load(html);
    let bowlers = $(".scorecard-section.bowling table tbody tr");
    let maxWicketBowler ='';
    let maxWickets = 0;
    for(let i = 0;i<bowlers.length;i++){
        let bowlerName = $($(bowlers[i]).find("td")[0]).text();
        let wickets = $($(bowlers[i]).find("td")[5]).text();
        if(wickets>maxWickets){
            maxWickets = wickets;
            maxWicketBowler = bowlerName;
        }
        
    }
    console.log(maxWicketBowler + " " + maxWickets);
    fs.writeFileSync("bowling.html",bowlingScoreCard);    
    
}
