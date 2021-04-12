function sideOpener(){
  document.querySelector('.SideNavigation').style.left=0;
document.querySelector('.title').style.position= "relative";
  
}

function closeSideNavigation(){
  document.querySelector('.SideNavigation').style.left="-100%";
document.querySelector('.title').style.position= "sticky";
  
}
