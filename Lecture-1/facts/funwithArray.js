let arr = [2,6,17,28,46,68];
let odd =[]
let even = []
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
}
console.log(odd);
console.log(even);
const map1 = odd.map(x => x-1);
const map2 = even.map(x => x+1);
let prime = map2.map(function(num){
    for(let i=2;i*i<=num;i++){
        return num;
    }
})

console.log(prime)