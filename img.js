document.getElementById('home').style.backgroundColor="blue";
//Home loading using this script
function home(){
 // body...
  document.querySelector("*").scrollTo(0,0);
  let victor = document.querySelectorAll("#Victor");
var i;
  for (i = 0; i < victor.length; i++) {
    victor[i].style.display = "grid";
  }
//when click to show img 
  let pic = document.querySelectorAll("#img");
var p;
  for (p = 0; p < pic.length; p++) {
    pic[p].style.display = "grid";
  }
 // body...
  document.querySelector("*").scrollTo(0,0);
  
  let video = document.querySelectorAll("#video");
var vid;
  for (vid = 0; vid< video.length; vid++) {
    video[vid].style.display = "grid";
  }
 ///active img btn 
document.getElementById('home').style.backgroundColor="blue";
 document.getElementById('imgBtn').style.backgroundColor="";
document.getElementById('victorBtn').style.backgroundColor="";
document.getElementById('videoBtn').style.backgroundColor="";
 
 
}
//Img loading using this script
function image() {
  // body...
  document.querySelector("*").scrollTo(0,0);
  let victor = document.querySelectorAll("#Victor");
var i;
  for (i = 0; i < victor.length; i++) {
    victor[i].style.display = "none";
  }
//when click to show img 
  let pic = document.querySelectorAll("#img");
var p;
  for (p = 0; p < pic.length; p++) {
    pic[p].style.display = "grid";
  }
 // body...
  document.querySelector("*").scrollTo(0,0);
  
  let video = document.querySelectorAll("#video");
var vid;
  for (vid = 0; vid< video.length; vid++) {
    video[vid].style.display = "none";
  }
 ///active img btn 
document.getElementById('home').style.backgroundColor="";
 document.getElementById('imgBtn').style.backgroundColor="blue";
document.getElementById('victorBtn').style.backgroundColor="";
document.getElementById('videoBtn').style.backgroundColor="";
 
 
}
//vector graphic loading using this script
function Victor(){
 // body...
  document.querySelector("*").scrollTo(0,0);
  let img = document.querySelectorAll("#img");
var i;
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
 // display victor when click on the img button
  let victor = document.querySelectorAll("#Victor");
var v;
  for (v = 0; v < victor.length; v++) {
    victor[v].style.display = "grid";
  }
 // body...
  document.querySelector("*").scrollTo(0,0);
  
  let video = document.querySelectorAll("#video");
var vid;
  for (vid = 0; vid< video.length; vid++) {
    video[vid].style.display = "none";
  }
 ///active img btn 
document.getElementById('home').style.backgroundColor="";
 document.getElementById('imgBtn').style.backgroundColor="";
document.getElementById('victorBtn').style.backgroundColor="blue";
document.getElementById('videoBtn').style.backgroundColor="";
 }
 
//video loading using this script
function Video(){
 // body...
  document.querySelector("*").scrollTo(0,0);
  
  let video = document.querySelectorAll("#video");
var vid;
  for (vid = 0; vid< video.length; vid++) {
    video[vid].style.display = "grid";
  }
 // display victor when click on the img button
  let victor = document.querySelectorAll("#Victor");
var v;
  for (v = 0; v < victor.length; v++) {
    victor[v].style.display = "none";
  }
//when click to show img 
  let pic = document.querySelectorAll("#img");
var p;
  for (p = 0; p < pic.length; p++) {
    pic[p].style.display = "none";
  }
 ///active img btn 
document.getElementById('home').style.backgroundColor="";
 document.getElementById('imgBtn').style.backgroundColor="";
document.getElementById('victorBtn').style.backgroundColor="";
document.getElementById('videoBtn').style.backgroundColor="blue";
 }

 //don't touch me 
 //search script 
 //get data form input 
function Filter() {
let input = document.querySelector("#myInput").value.toUpperCase();

let myContainer = document.querySelector(".container");

let imgContainer = myContainer.querySelectorAll(".imgContainer");

for (var i = 0; i < imgContainer[i].length; i++) {

let realImg = imgContainer[i].getElementsByTagName('img')[0];

let realImgAlt = imgContainer[i].getElementsByTagName('img')[0].alt;

if (realImgAlt.toUpperCase().indexOf(input) > -1) {
  console.log("success ");
}
else{
  console.log("faild");
}

 }
}

//don't touch me 