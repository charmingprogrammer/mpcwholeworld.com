function openNavigation(){
        var switcher =  document.querySelector("ul");
        switcher.classList.toggle("switcher");
}
function admissionNow()
{
          document.getElementById("admissionNow").style.transform = "Scale(1)";
}
function admissionNowClose()
{
          document.getElementById("admissionNow").style.transform = "Scale(0)";
}