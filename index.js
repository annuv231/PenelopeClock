var x,hour,min,sec
setInterval(() => {
     x= new Date();
hour=x.getHours();
 min=x.getMinutes();
sec=x.getSeconds();
var toggle=0;
if(hour>12){
  hour=hour-12;
  toggle=1;
}
if(sec<10){
    sec="0"+sec;
}
console.log(typeof hour);
if(hour<10){
    hour="0"+hour;
}
if(min<10){
    min="0"+min;
}
 if(toggle){
document.getElementById("gettime").innerHTML=hour+":"+min+":"+sec+" PM";}
     else {
          document.getElementById("gettime").innerHTML=hour+":"+min+":"+sec+" AM";
     }
}, 1000);
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }
  var x,hour,min,sec
  setInterval(() => {
       x= new Date();
  hour=x.getHours();
   min=x.getMinutes();
  sec=x.getSeconds();
  var toggle=0;
  if(hour>12){
    hour=hour-12;
    toggle=1;
  }
  if(sec<10){
      sec="0"+sec;
  }
  console.log(typeof hour);
  if(hour<10){
      hour="0"+hour;
  }
  if(min<10){
      min="0"+min;
  }
   if(toggle){
  document.getElementById("title").innerHTML=hour+":"+min+":"+sec+" PM"+" Penelope clock";}
       else {
            document.getElementById("title").innerHTML=hour+":"+min+":"+sec+" AM"+" Penelope clock";
       }
  }, 1000);
