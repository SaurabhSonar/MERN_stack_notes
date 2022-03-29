var abc=hoisting();
console.log(abc)

function hoisting(){
    var A=10;
    return ++A;
}