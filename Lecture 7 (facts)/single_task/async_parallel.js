//parallel
//f1 -> read
// f2 -> read
// serial => f1 => read , f2 => read
let fs = require("fs");
console.log("Started executing file");
console.log("CPU is stuck till file is read");
fs.readFile("../../f1.mp4",function cb(err,data){
    //console.log("printed file");
    console.log("file 1 has arrived");
    console.log(data.bytelength);
});
fs.readFile("../../f2.mp4",function cb(err,data){
    console.log("file 1 has arrived");
    console.log(data.bytelength);
});

//binary => array
console.log("CPU is free now");
console.log("Now I can print something"); 
