let fs = require("fs");
function promiseMultiFileReader(){
    let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt","../f5.txt"];
    let filesWillBeReadPromise = fs.promises.readFile(files[0]);
    for(let i = 1;i<files.length;i++){
        filesWillBeReadPromise = filesWillBeReadPromise.then(function (data) {
            console.log(`File no ${i} printed`);
            let fnp = fs.promises.readFile(files[i]);
            return fnp;
        })
    }
    return filesWillBeReadPromise;
}

promiseMultiFileReader().then(function (data) {
    console.log("file 5 will be printed");
    console.log(data);
})