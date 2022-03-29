function outer(){
    var count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
var counter=outer();
//console.log(counter)    out-fun inner()  because it return only reference of fun inner()
console.log(counter());  // It returns the method of function
console.log(counter());
console.log(counter());