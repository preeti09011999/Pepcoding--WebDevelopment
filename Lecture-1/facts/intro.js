let number = 7;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        console.log("Number is not prime");
        return;
    }
}

console.log("Number is prime");