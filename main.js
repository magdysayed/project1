
// let btnopen = document.getElementById('open');
// let btnclose = document.getElementById('close');
// let container = document.getElementById('container');

// btnclose.onclick= function(){
    
//     container.classList.add('hide');
//     this.classList.add('hide');
//     btnopen.classList.remove('hide');
// }
// btnopen.onclick= function(){
    
//     container.classList.remove('hide');
//     this.classList.add('hide');
//     btnclose.classList.remove('hide');
// }



// let btn = document.getElementById("btn");

// window.onscroll=function(){
//     if(scrollY >= 400){
//         btn.style.display='block';
//     }else{
//         btn.style.display='none';
//     }
// }
// btn.onclick = function(){
//     scroll({
//         top:0,
//         left:0,
//         behavior:"smooth"
//     })
// }

// let i = 0;
// let hello = setInterval(function(){
//     console.log(i++);
// //     if(i==5){
//         clearInterval(hello);
//     }
// },1000)
if(localStorage.length>0){
    document.body.style.backgroundColor=localStorage.color;
}

function setcolor(color){
    localStorage.setItem('color', color)
    document.body.style.backgroundColor=color;
}