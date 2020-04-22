let fs = require("fs");
console.log("Before");
let content = fs.readFileSync("f1.html");
console.log(content + " ");
console.log("After");