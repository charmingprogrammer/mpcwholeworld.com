function showImg1() {
    document.getElementById("img2").style.right = "0%";
    document.getElementById("circle1").style.display = "none";
    document.getElementById("circle2").style.display = "block";
}

function showImg2() {
    document.getElementById("img2").style.right = "100%";
    document.getElementById("img3").style.right = "0%";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle3").style.display = "block";


}
function showImg3() {
    document.getElementById("img3").style.right = "100%";
    document.getElementById("img4").style.right = "0%";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "block";

}
function showImg4() {
    document.getElementById("img4").style.right = "100%";
    document.getElementById("img5").style.right = "0%";
    document.getElementById("circle4").style.display = "none";
    document.getElementById("circle5").style.display = "block";

}
function showImg5() {
    document.getElementById("img5").style.right = "100%";
    document.getElementById("img1").style.right = "0%";
    document.getElementById("circle5").style.display = "none";
    document.getElementById("circle1").style.display = "block";
    location.reload();
}