function speedChange() {
  document.getElementById("container").style.animationDuration = "50s";
}
function speedChange2() {
  document.getElementById("container").style.animationDuration = "10s";
}
//for earth
function openEarth() {
  document.getElementById("earthContainer").style.transform = "scale(1)";
  document.getElementById("earth").style.border = "5px blue solid";
}
function closeEarth() {
  document.getElementById("earthContainer").style.transform = "scale(0)";
  document.getElementById("earth").style.border = "none";
}
//for mercury
function openMercury() {
  document.getElementById("mercuryContainer").style.transform = "scale(1)";
  document.getElementById("mercury").style.border = "5px blue solid";
}
function closeMercury() {
  document.getElementById("mercuryContainer").style.transform = "scale(0)";
  document.getElementById("mercury").style.border = "none";
}
//for mars
function openMars() {
  document.getElementById("marsContainer").style.transform = "scale(1)";
  document.getElementById("mars").style.border = "5px blue solid";
}
function closeMars() {
  document.getElementById("marsContainer").style.transform = "scale(0)";
  document.getElementById("mars").style.border = "none";
}
//for neptune
function openNeptune() {
  document.getElementById("neptuneContainer").style.transform = "scale(1)";
  document.getElementById("neptune").style.border = "5px blue solid";
}
function closeNeptune() {
  document.getElementById("neptuneContainer").style.transform = "scale(0)";
  document.getElementById("neptune").style.border = "none";
}
//for saturn
function openSaturn() {
  document.getElementById("saturnContainer").style.transform = "scale(1)";
  document.getElementById("saturn").style.border = "5px blue solid";
}
function closeSaturn() {
  document.getElementById("saturnContainer").style.transform = "scale(0)";
  document.getElementById("saturn").style.border = "none";
}

//for venus
function openVenus() {
  document.getElementById("venusContainer").style.transform = "scale(1)";
  document.getElementById("venus").style.border = "5px blue solid";
}
function closeVenus() {
  document.getElementById("venusContainer").style.transform = "scale(0)";
  document.getElementById("venus").style.border = "none";
}
//for moon
function openMoon() {
  document.getElementById("moonContainer").style.transform = "scale(1)";
  document.getElementById("moon").style.border = "5px blue solid";
}
function closeMoon() {
  document.getElementById("moonContainer").style.transform = "scale(0)";
  document.getElementById("moon").style.border = "none";
}
//for loader
function loaderShow(){
          document.getElementById("loader").style.transform = "scale(0)";
}