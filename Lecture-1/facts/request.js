//server
const {exec} = require("child_process")
var opn = require("opn")
function takeRequest(data,success,failure){
    if(data%2==0){
        success();
    }
    else{
        failure();
    }
}
//client
function success(){
    console.log("Your request was completed");
    opn("https://www.facebook.com");
}

function failure(){
    console.log("Some error occurred");
}

takeRequest(17,success, failure);
takeRequest(18,success, failure);

