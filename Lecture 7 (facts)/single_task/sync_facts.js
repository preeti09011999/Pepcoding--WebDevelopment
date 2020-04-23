// file read => sync , async
// nodejs => fs
let fs = require("fs");
console.log("Started executing file");
console.log("CPU is stuck till file is read");
// code stuck => nodejs => sync
let content = fs.readFileSync("f1.mp4");
//binary => array
console.log(content.byteLength);
console.log("CPU is free now");
console.log("Now I can print something");