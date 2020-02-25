let arr = [2,6,17,28,46,68];
// function OddEven(num){

//     if(num%2==0){
//         return num+1
//     }
//     else{
//         return num-1
//     }

// }

// function checkPrime(number){
//     for(let i=2;i*i<=number;i++){
//         if(number%i==0){
//             return false
//         }
//     }
//     return true
// }

// let map1 = arr.map(OddEven);
// const primeArr = map1.filter(checkPrime)

// console.log(primeArr)

function squarer(x){                               
    return x*x;
}

// // // function mymap(arr, squarer){
// // //     newArr = []
// // //     for(let i=0;i<arr.length;i++){
// // //         let map1 = squarer(arr[i])
// // //         newArr.push(map1);
       
// // //     }
// // //     return newArr;
// // // }
// // function myfilter(arr,cb){
// //     let myArr = [];
// //     for(let i=0;i<arr.length;i++){
// //         if(cb(arr[i])==true){
// //             myArr.push(arr[i]);
// //         }
// //     }
// //     return myArr
   
// // }
function checkPrime(number){
    for(let i=2;i*i<=number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

Array.prototype.mymap = function(squarer){
    newArr = []
    for(let i=0;i<this.length;i++){
        let map1 = squarer(this[i])
        newArr.push(map1);
       
    }
    return newArr;
}

Array.prototype.myfilter = function(cb){
     let myArr = [];
    for(let i=0;i<this.length;i++){
        if(cb(arr[i])==true){
            myArr.push(this[i]);
        }
    }
    return myArr
   
}


let map2 = arr.mymap(squarer);
let primeArr = arr.myfilter(checkPrime);
console.log(map2);
console.log(primeArr);