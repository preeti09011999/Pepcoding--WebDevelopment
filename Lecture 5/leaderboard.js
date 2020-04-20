let fs = require("fs")
let cheerio = require("cheerio");
let request = require("request");

request("https://www.espncricinfo.com/scores/series/19322", function (err, res, html) {
    if (err === null && res.statusCode === 200) {
        fs.writeFile("index.html", html, function (err) { })
        parseHtml(html);
    } else if (res.statusCode === 404) {
        // console.log("in else if");
        console.log("invalid url");
    } else {

        // console.log("in else");
        console.log(err);
        console.log(res.statusCode);
    }
})
let count = 0;
let leaderBoard =[];
function parseHtml(html) {
    let $ = cheerio.load(html);
    //ODIs and T20 results
    let cards = $(".cscore.cscore--final.cricket.cscore--watchNotes");
    for (let i = 0; i < cards.length; i++) {
        let matchType = $(cards[i]).find(".cscore_info-overview").html()
        let test = matchType.includes("ODI") || matchType.includes("T20");
        if (test) {
            // console.log(matchType);
            //find anchors => go to href link => manual request
            let a = $(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
            let matchLink = `https://www.espncricinfo.com${a}`;
            goToMatch(matchLink);
            // count++
        }
    }
}

function goToMatch(link) {
    count++;
    request(link, function (err, res, html) {
        if (err === null && res.statusCode == 200) {
            fs.writeFileSync(`match${count}.html`, html)
            handleMatch(html)
            count--;
            if(count == 0){
                console.table(leaderBoard);
            }
        } else if (res.statusCode == 404) {
                console.log("invalid url");
        } else {
               console.log(err);
        console.log(res.statusCode); 
        }
    })
}

function handleMatch(html) {
    let $ = cheerio.load(html)
    let format = $(".cscore.cscore--final.cricket .cscore_info-overview").html();
    format = format.includes("ODI") ? "ODI" : "T20";
    //    console.log(format);
    let teams = $(".sub-module.scorecard h2");
    let inning = $(".sub-module.scorecard")
    // console.log(format);
    for (let i = 0; i < inning.length; i++) {
        let team = $(teams[i]).text();
        // console.log($(teams[i]).text());
        let batsmen = $(inning[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen")
        for (let j = 0; j < batsmen.length; j++) {

            let batsMan = $(batsmen[j])
            let batsManName = batsMan.find(".cell.batsmen").text()
            let batsManRun = batsMan.find(".cell.runs").html()
            handlePlayer(format,team,batsManName,batsManRun);
        }
        // console.log("***********");

    }
    // console.log("----------------------------------");
}

function handlePlayer(format,team,batsman,batsmanRun){
    //batsman => 
     batsmanRun = Number(batsmanRun);
    //check if player exist already
    for(let i =0 ;i<leaderBoard.length;i++){
        let pObj = leaderBoard[i];
        if(pObj.name==batsman&&pObj.team==team&&pObj.format==format){
            pObj.run += batsmanRun;
            return;
        }
    }
    let obj = {
        run: batsmanRun,
        format: format,
        team: team,
        name: batsman
    };

    leaderBoard.push(obj);
    //1st time => create new 
    //repeated => existing runs update
}
