const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['pink','green','yellow','blue','black','lightblue','violet']
body.style.backgroundColor='lightgreen'
document.addEventListener('click',function(){
    const colorindex = parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
});