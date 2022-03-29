function car(){
    this.speed=50;
}
car.prototype.acc=function(){
    this.speed+=60;
}
car.prototype.checkspeed=function(){
    console.log("The Speed is "+this.speed)
}
var obj=new car();
obj.acc();
obj.checkspeed();