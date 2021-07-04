var x,hour,min,sec
setInterval(() => {
     x= new Date();
hour=x.getHours();
 min=x.getMinutes();
sec=x.getSeconds();
if(sec<10){
    sec="0"+sec;
}
if(hour<10){
    hour="0"+hour;
}
if(min<10){
    min="0"+min;
}
document.getElementById("gettime").innerHTML=hour+":"+min+":"+sec;
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