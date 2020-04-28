function promiseCreator(){
    return new Promise(function mfn(resolve,reject){
        setTimeout(function(){
            resolve(10);
        }, 1000);
    })
}

let pPromise = promiseCreator();
function resolve(data){
    console.log("Inside resolve of 1st then");
    console.log(data);
    console.log("------------------------------------------------");
    // return undefined;
}

function reject(err){
    console.log(err);
    //return Promise.reject();
    //return Promise.resolve();
    //throw new error ("Error send by reject/fcb of 1st then")
}

function resolve1(data){
    console.log("scb of 2nd then ")
    console.log(data);

}

function reject1(err){
    console.log("Inside fcb of 2nd then")
    console.log(err);
}

pPromise.then(resolve,reject).then(resolve1,reject1);