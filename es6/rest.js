function mysum(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    } 
    return sum;
}
console.log(mysum(2,5));
console.log(mysum(1,2,4,5));