let salary={
    "paras":3000000,
    "tushar":500000,
    "rahul":400000
}
function top(salary){
    var max=0;
    var topper="null";
    for (let name in salary) {
        if (salary[name]>max){
            max=salary[name];
            topper=name;
        }

    }
    console.log(`${topper}`);
}
top(salary);
