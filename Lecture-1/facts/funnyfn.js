function greeter(what to say){
    console.log(what to say);
}

let sayHi = greeter;
sayHi(function asparam(){
    console.log("I can be passed as parameter");
})