let fs = require("fs")
file1ReadPromise = fs.promises.readFile("../../f1.txt","utf-8");
file1ReadPromise.then(function(data) {
    console.log("f1 data");
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});

file2ReadPromise = fs.promises.readFile("../../f2.txt","utf-8");
file2ReadPromise.then(function(data) {
    console.log("f2 data - ");
    console.log(data);
})
.catch(function(error) {
    console.log( error);
});

file3ReadPromise = fs.promises.readFile("../../f3.txt","utf-8");
file3ReadPromise.then(function(data) {
    console.log("f3 data");
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});