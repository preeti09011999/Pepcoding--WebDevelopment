function promiseCreator(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
          reject(10);  
        }, 10000);
    })
}
let pPromise = promiseCreator();
console.log("When I was pending");
console.log(pPromise);
function resolve(data){
    console.log(data);
}

function reject(err){
    console.log(err);
}

pPromise.then(resolve,reject)