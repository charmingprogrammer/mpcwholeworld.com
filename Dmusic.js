//function hindi(){
//}

let music1 = document.getElementById("music1");
let fill = document.getElementById("fill");
let progressBar = document.getElementById("progressBar");

music1.ontimeupdate = function(e) {
  fill.style.height = Math.floor(music1.currentTime*100/music1.duration)+"%";
  
}

progressBar.onclick = function(e) {
 music1.currentTime = ((e.offsetY/progressBar.offsetHeight) * music1.duration);
 music1.play();
document.getElementById("play").style.backgroundColor = "#3366ff";
document.getElementById("pause").style.backgroundColor = "";
}


function playMusic(){
  document.getElementById("music1").play();
  document.getElementById("play").style.backgroundColor = "#3366ff";
  
document.getElementById("pause").style.backgroundColor = "";
document.getElementById("music2").pause();
}
function pauseMusic(){
  document.getElementById("music1").pause();
  document.getElementById("play").style.backgroundColor = "";
  
document.getElementById("pause").style.backgroundColor = "#3366ff";
}



let music2 = document.getElementById("music2");
let fill2 = document.getElementById("fill2");
let progressBar2 = document.getElementById("progressBar2");

music2.ontimeupdate = function(e) {
  fill2.style.height = Math.floor(music2.currentTime*100/music2.duration)+"%";
  
}

progressBar2.onclick = function(e) {
 music2.currentTime = ((e.offsetY/progressBar2.offsetHeight) * music2.duration);
 music2.play();
document.getElementById("play2").style.backgroundColor = "#3366ff";
document.getElementById("pause2").style.backgroundColor = "";
}


function playMusic2(){
  document.getElementById("music2").play();
  document.getElementById("play2").style.backgroundColor = "#3366ff";
  
document.getElementById("pause2").style.backgroundColor = "";
document.getElementById("music1").pause();
}
function pauseMusic2(){
  document.getElementById("music2").pause();
  document.getElementById("play2").style.backgroundColor = "";
  
document.getElementById("pause2").style.backgroundColor = "#3366ff";
}

