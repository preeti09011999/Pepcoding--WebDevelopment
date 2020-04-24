let fs = require("fs");

fs.readFile("../f1.txt",function(err,data){
    console.log(`f1 ${data.byteLength}`)
    if(data.byteLength > 20){
        fs.readFile("../f2.txt",function (err,data) {
            console.log(`f2 ${data.byteLength}`)
            if(data.byteLength<40){
                fs.readFile("../f6.txt",function (err,data) {
            console.log(`f6 ${data.byteLength}`)
            })
            }
            else{
                fs.readFile("../f7.txt",function(err,data){
                    console.log(`f7 ${data.byteLength}`)
                })
            }
        })
       
    }
else{
    
    fs.readFile("../f3.txt",function(err,data){
        console.log(`f3 ${data.byteLength}`)
        if(data.byteLength<30){
            fs.readFile("../f4.txt",function(err,data){
                console.log(`f4 ${data.byteLength}`)
            })
        }else{
            fs.readFile("../f5.txt",function(err,data){
                console.log(`f5 ${data.byteLength}`)
            })
        }
    })
}
});

