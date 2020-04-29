let fs = require("fs");
//promise based fn use=> promise => pending
//paradigm
//creator
//resolve
//reject
function promisifyfs(path){ 
    let fileWillBeReadPromise = new Promise(function (success,failure){
        fs.readFile(path, function(err, data){
            if(err){
                failure(err);
            }else{
                success(data);
            }
        })
    })
    return fileWillBeReadPromise;
}
//consume
let fileWillBeReadPromise = promisifyfs("f1.html");
//promise => settle
fileWillBeReadPromise.then(function (data) {
    console.log("inside then");
    console.log(data.length);
})
//reject => err
fileWillBeReadPromise.catch(function (err) {
    console.log("inside catch");
    console.log(err);
})
