let fs = require("fs")
async function conditonBaseFileReadingAsync() {
    let data = await fs.promises.readFile("../../f1.txt","utf-8");
    console.log("f1 data");
    console.log(data);
    if( data.byteLength > 20 ) {
        let data = await fs.promises.readFile("../../f2.txt","utf-8");
        console.log("f2 data");
        console.log(data);
    }
    else {
        let data = await fs.promises.readFile("../../f3.txt","utf-8");
        console.log("f3 data");
        console.log(data);
    }
}

setTimeout(function(){
    conditonBaseFileReadingAsync();
    console.log("----------------------------------------------------------");
},3000);

    