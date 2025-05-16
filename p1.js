const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=["pink","orange","red","purple","blue","grey","green","white"];
body.style.backgroundColor='purple';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})
