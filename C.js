let h=document.getElementById("saat");
let m=document.getElementById("daghighe");
let s=document.getElementById("sanie");
let button=document.querySelector('button')
let time=new Date();


var x;

button.addEventListener('click',()=>{
     x=time.getSeconds()*6+90;
     y=time.getMinutes()*6+90;
      z=show(time.getHours())*30+90;
  
    button.innerHTML+=z;
   setInterval(tenet,1000);
})

function tenet(){
  s.style.transform=`rotateZ(${x}deg)`;
  h.style.transform=`rotateZ(${z}deg)`;
  m.style.transform=`rotateZ(${y}deg)`;
  x+=6;
  if(x%90==0 &&x%180!=0 &&x%270!=0 && x%360!=0){
    m.style.transform=`rotateZ(${y}deg)`;
    y+=6;
  }
  if(m%90==0){
    button.innerHTML+=z;
    h.style.transform=`rotateZ(${z}deg)`;
    z+=6;
  }
}
function show(time){
if(time>12){
    return time-12;
}
else{
    return time;
}
}
