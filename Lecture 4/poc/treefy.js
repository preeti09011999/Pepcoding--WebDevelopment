let fs = require("fs");
let path = require("path");

function treefy(src,dest,node){
    if(node.isFile == true){
        let srcPath = path.join(src,node,newName);
        let destPath = path.join(dest,node.oldName);
        fs.copyFileSync(srcPath,destPath);
    }else{
        let dirPath = path.join(dest,node.name);
        fs.mkdirSync(dirPath);
        let children = node.children;
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childpath = path.join(dest,child.name);
            treefy(src,childpath,child);
        }
    }
}

let root = require(path.join(dest,"metadata.json"))
treefy(process.argv[2],process.argv[3],root);