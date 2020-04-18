let fs = require("fs");
let path = require("path");
var uniqid = require("uniqid");
function checkPathisDirectoryOrNot(src){
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src){
    let children = fs.readdirSync(src);
    return children;
}

function untreefy(src,dest,node){
    let isFile = checkPathisDirectoryOrNot(src);
    if (isFile == true) {
        //copy data
        let newFileName = uniqid();
        let destPath = path.join(dest,newFileName);
        fs.copyFileSync(src, destPath);
        // src => src path
        //dest => dest
        //d10/d20/f1.txt
        node.isFile = true,
        node.oldName = path.basename(src),
        node.newName = newFileName
        
        
        

    }else{
        //directory
        //children
       
        node.isFile = false,
        node.oldName = path.basename(src),
        node.children = []
        
        //children -> content read
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let cPath = path.join(src,children[i]);
            let chobj = {}
            untreefy(cPath,dest,chobj);
            node.children.push(chobj);
        }
    }    
}
let root = {}
untreefy(process.argv[2],process.argv[3],root);
fs.writeFileSync(path.join(process.argv[3],"metadata.json"),JSON.stringify(root));
// console.log(root);