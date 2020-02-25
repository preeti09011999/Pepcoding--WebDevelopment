function printDec(num){
    if(num==0){
        return;
    }
    console.log(num);
    //faith
    printDec(num-1);
}
printDec(5);
// function printIncreasing(num) {
//     if(num==0){
//         return;
//     }
//     printIncreasing(num-1);
//     console.log(num);
// }