class A{
     ABC(){
        return "HEllo";
    }
}
class B extends A{
    CD(){
       let fname="World";
       let pname=super.ABC();//hello
       console.log(`Hey Computer ${pname} ${fname}`);
    }
}
const obj=new B;
obj.CD();