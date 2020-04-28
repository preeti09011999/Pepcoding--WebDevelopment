let fs = require("fs");
let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];
readFiles(0);
//sequentially n number files read
function readFiles(i){
    if(i == files.length){
        return;
    }

fs.readFile(files[i],function(err,data){
    console.log(`Data of file${i+1} : ${data.byteLength}`);
})
    readFiles(i+1);
}

let fs = require("fs");
console.log("Before");

//IIFEE
(async function () {
    let data1 = fs.promises.readFile("../../f1.txt");
    let data2 = fs.promises.readFile("../../f2.txt");
    let data3 = fs.promises.readFile("../../f3.txt");
    data1 = await data1;
    console.log("F1's Data"+ data1.length); 
    data1 = await data2;
    console.log("F1's Data"+ data2.length);
    data1 = await data3;
    console.log("F1's Data"+ data3.length);

})();
console.log("After");
