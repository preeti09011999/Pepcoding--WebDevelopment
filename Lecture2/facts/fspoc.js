const fs = require("fs");
const path = require("path");
function displayList(src){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans == false){
        console.log(src+"*");
    }
    else{
        console.log(src);
        //to list the content of a directory in node js
        let children = fs.readdirSync(src);
        for(let i=0;i<children.length;i++){
            let cChPath = path.join(src,children[i]);
            displayList(cChPath);
        }
     
    }
    }

displayList("src");