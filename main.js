let pra=document.getElementsByTagName('p')
let width1=document.getElementById('width')
let height1=document.getElementById('height')
let color1=document.getElementById('color')
let ridus1=document.getElementById('ridus')
let rest1=document.getElementById('rest')
let retarn1=document.getElementById('retarn')


rest1.addEventListener('click', ()=>{
    pra.style.width=width1.value +'px';
    pra.style.height=height1.value +'px';
    pra.style.borderRadius=ridus1.value +'px';
    pra.style.backgroundColor=color1.value ;
})