let fs = require("fs");
console.log("Started Executing file");
console.log("CPU is stuck till file is read");
//code stuck => nodejs => async
//control flow => async functions
fs.readFile("f1.mp4",function(err,data){
    console.log(data.bytelength);
});
//binary => array
console.log("cpu is free now");
console.log("Now I can print something");
