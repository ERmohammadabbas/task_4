console.log("Script runing")
document.querySelector('.close').style.display='none';
document.querySelector('.humburge').addEventListener("click",()=>{
  document.querySelector('.sidebarGo').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebarGo').classList.toggle('sidebarGo'))
  {
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.close').style.display='none'
  }
  else{
    document.querySelector('.ham').style.display='none'
    document.querySelector('.close').style.display='inline'
  }
})