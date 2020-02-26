const fs = require("fs");
const path = require("path");
function displayTree(indent, src){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans == false){
        console.log(indent + path.basename(src)+"*");
    }
    else{
        console.log(indent + path.basename(src));
        //to list the content of a directory in node js
        let children = fs.readdirSync(src);
        for(let i=0;i<children.length;i++){
            
            let cChPath = path.join(src,children[i]);
            displayTree(indent+"\t",cChPath);
        }
     
    }
    }

displayTree("", "src");