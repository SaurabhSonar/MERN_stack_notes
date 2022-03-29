class time{
    get_time(){
      let d=new Date();
      let hrs=d.getHours();
     let min=d.getMinutes();
     let sec=d.getSeconds();
      if(hrs>12){
        hrs=hrs-12
       console.log(hrs+" : "+min+" : "+sec+" pm")
    }
    else
    {
        console.log(hrs+" : "+min+" : "+sec+" am")
    }
    }

}
var obj=new time;
obj.get_time();