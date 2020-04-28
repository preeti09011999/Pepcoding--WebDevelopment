let fs = require("fs");
let file1ReadPromise = fs.promises.readFile("../../f1.txt","utf-8");
let file2ReadPromise = fs.promises.readFile("../../f2.txt","utf-8");
let file3ReadPromise = fs.promises.readFile("../../f3.txt","utf-8");
Promise.all([file1ReadPromise,file2ReadPromise,file3ReadPromise])
    .then(function([data1,data2,data3]) {
        console.log("f1 data");
        console.log(data1);
        console.log("f2 data");
        console.log(data2);
        console.log("f3 data");
        console.log(data3);
        console.log("---------------------------------------------------------------------------------------------------------------");
    })
    .catch(function(err) {
        console.log(err);
    })