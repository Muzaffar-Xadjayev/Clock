let clock=document.querySelector('.clock');
let main = document.querySelector('.main')
let hour=document.getElementById('hour');
let minut=document.getElementById('minut');
let second=document.getElementById('second');
let timeStatus=document.getElementById('timeStatus');
let format;
window.addEventListener('DOMContentLoaded',()=>{
    timeNow();
})
function timeNow(){
    let format = clock.getAttribute('data-format')
    let date=new Date();
    // console.log(date);
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    if(format==='12'){
        h=h>12?h%12:h
    }
    hour.innerHTML=h<10?'0'+h:h;
    minut.innerHTML=m<10?'0'+m:m;
    second.innerHTML=s<10?'0'+s:s;
    if(hour<12){
        timeStatus.innerHTML='AM'
    }else{
       timeStatus.innerHTML='PM'
    }
}
setInterval(timeNow,1000)
let buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        format=button.getAttribute('data-format');
        // console.log(format);
        clock.setAttribute('data-format',format)
    });

})
let loader=document.getElementById('loader')
setTimeout(()=>{
    loader.remove()
    main.classList.add('salom')
},2000)

