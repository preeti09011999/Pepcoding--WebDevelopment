function promiseCreator(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("resolved val of promise");
        },1000)
    })
}

async function promiseConsumer(){
    //promiseCreator().then(function(data){
        // console.log(data);

    // })
    try{
        let data = await promise();
        console.log(data);

    }catch(err){
        console.log("Inside catch");
        console.log(err);
    }
}
promiseConsumer(); 
