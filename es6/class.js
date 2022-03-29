class ABC{
    constructor(){
        this.speed=60;
    }
    acc(){
        this.speed+=60
    }
    checkspeed(){
        console.log(`The speed is ${this.speed}`)
    }
}
const obj=new ABC;
obj.acc();
obj.checkspeed();
