let fs = require("fs")
setTimeout(function() {
        fs.promises.readFile('../../f1.txt',"utf-8")
        .then(function(data) {
            console.log("F1 data");
            console.log(data);
            if(data.bytelength > 20) {
                console.log("f2 data");
                return fs.promises.readFile('../../f2.txt',"utf-8")
            }
            else {
                console.log("f3 data");
                return fs.promises.readFile('../../f3.txt',"utf-8")
            }
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
    },2000);