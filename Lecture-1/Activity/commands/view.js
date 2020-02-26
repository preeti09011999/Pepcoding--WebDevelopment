const fs = require("fs");
const path = require("path");
module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];
    if(mode == "-t"){
        viewAsTree("",src);
        
    }else if(mode == '-f'){
        viewAsFlatFiles(src);
       
    }else{
        console.log("Wrong parameters");
    }

};
function viewAsTree(indent,src){
   
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
            viewAsTree(indent+"\t",cChPath);
        }
     
    }
    
}
function viewAsFlatFiles(src){
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
            viewAsFlatFiles(cChPath);
        }
     
    }
   }



