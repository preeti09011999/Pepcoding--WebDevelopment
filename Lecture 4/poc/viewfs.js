//file, directory
// directory -> content
let fs = require("fs");
let path = require("path");
function checkPathisDirectoryOrNot(src){
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src){
    let children = fs.readdirSync(src);
    return children;
}

function viewAsFlatFile(src){
    let isFile = checkPathisDirectoryOrNot(src);
    if (isFile == true) {
        console.log(src + "*");
    }else{
        //print
        console.log(src);
        //children -> content read
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childPath = path.join(src,child);
            // d10/d20
            viewAsFlatFile(childPath);
        }
    }    
    }

    function viewAsTree(src,indent){
        let isFile = checkPathisDirectoryOrNot(src);
        if(isFile == true){
            console.log(indent + path.basename(src)+"*");
        }else{
            console.log(indent + path.basename(src));
            let children = childrenReader(src);
            for(let i=0;i<children.length;i++){
                let child = children[i];

                let childPath = path.join(src,child);

                viewAsTree(childPath,indent +"\t");
            }
        }
    }

    //viewAsFlatFile(process.argv[2]);
    viewAsTree(process.argv[2],"");