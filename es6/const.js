const MAIN_URL="abc.com";
const ARR=[1,2,3,4];
const OBJ={name:"Saurabh",age:"22"};
OBJ.name="Sam";  //allowed
console.log(OBJ)
ARR[0]=10;    //allowed
console.log(ARR);
MAIN_URL="bca.com" //not allowed
console.log(MAIN_URL)
ARR=[6,7,8,9]   //not allowed
console.log(ARR)
