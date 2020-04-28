let fs = require("fs");
(async function multipleFilesRead(files) {
    try{
        console.log("---------------------------------------------------------------------------------------------------------------");
        for(let idx=0;idx<files.length;idx++) {
            console.log(`File-${idx+1} data`);
            console.log(await fs.promises.readFile(files[idx],"utf-8"));
        }    
    }
    catch(error) {
        console.log(error);
    }
    console.log("---------------------------------------------------------------------------------------------------------------");
})(["../../f1.txt","../../f2.txt","../../f3.txt"]);