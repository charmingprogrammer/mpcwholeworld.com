//for education category
function previous() {
  const sliderContainer = document.querySelector(".categoryNo");
  sliderContainer.scrollBy(-400, 0);
}
function next() {
  const sliderContainer = document.querySelector(".categoryNo");
  sliderContainer.scrollBy(400, 0);
}
///////////for entertainment  category
function previousEnt() {
  const sliderContainer = document.querySelector("#entertainmentCategory");
  sliderContainer.scrollBy(-400, 0);
}
function nextEnt() {
  const sliderContainer = document.querySelector("#entertainmentCategory");
  sliderContainer.scrollBy(400, 0);
}
///////////for politics  category
function previousPol() {
  const sliderContainer = document.querySelector("#politicsCategory");
  sliderContainer.scrollBy(-400, 0);
}
function nextPol() {
  const sliderContainer = document.querySelector("#politicsCategory");
  sliderContainer.scrollBy(400, 0);
}
const sliderVideoContainer = document.querySelector("#shortVideos");
function videoPre() {
  sliderVideoContainer.scrollBy(-300, 0);
}
function videoNex() {
  sliderVideoContainer.scrollBy(300, 0);
}
const sliderTreContainer = document.querySelector("#trendingNew");
function trePre() {
  sliderTreContainer.scrollBy(-300, 0);
}

function treNex() {
  sliderTreContainer.scrollBy(300, 0);
}

//for opening menu
function Topics() {
  document.getElementById("topicCon").style.transform = "scale(1)";
  document.getElementById("Topics").style.boxShadow = "0 0 10px 1px black";
}
//for close this menu
function topicCon() {
  document.getElementById("topicCon").style.transform = "scale(0)";
  document.getElementById("Topics").style.boxShadow = "none";
}
//for closing main page 
function closeTrendingMainPage() {
  trendingMainPage.style.transform = "scale(0)";
}
//scroll using menu button 
var scrollVertical = document.querySelector("*");
//for trending news 
function trending() {
  scrollVertical.scrollTo(00, 0);
}
//for short videos
function shortVideo() {
  scrollVertical.scrollTo(00, 409);
}
//for educational news
function educational() {
  scrollVertical.scrollTo(00, 970);
}
//for entertainment news
function entertainment() {
  scrollVertical.scrollTo(00, 1330);
}
//for Politics news
function politics() {
  scrollVertical.scrollTo(00, 1680);
}
//for agreement script
//for about us page 
function about() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById("about").style.color = "#1c39bd";
  document.getElementById('titleOfAgreementPage').innerHTML = "About Us";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "katraNew.com is a local news based website that provide news inside of India(Bihar(Muzaffarpur(Katra village))).katra news.com provides these category news => Trending news,Short Video news,Educational news,Entertainment news,Politics news. katraNew.com serve real news.<br>owner and Developer Details:<br>Mr.Manohar Anand => owner and Developer<br> who is Manohar Anand?<br>Manohar Anand is a student of IIT-JEE and web-developer and self thought Software Engineer.<br>How Work katraNew.com?<br> our news provider team help me to research news and then write code and implement news on the site by Manohar Anand.<br>Release date => 00.00.00 <br>version => 1.0 <br> Dummy Version released = 07.02.2021";
scrollVertical.scrollTo(0, 1950)
  scrollVertical.scrollTo(0, 1950)


}
///for contact us page
function contact() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById("contact").style.color = "#1c39bd";
  document.getElementById('titleOfAgreementPage').innerHTML = "Contact Us";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "Office => India(Bihar(Muzaffarpur(Katra Village)))<br>Office Name => Developer World<br>Email => katraNewsContact@gmail.com(Normal)<br>Email =>katraNewsBusiness@gmail.com(Business)";
  scrollVertical.scrollTo(0, 1950)

}
//for privacy and policy page
function pp() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById("pp").style.color = "#1c39bd";
  document.getElementById('titleOfAgreementPage').innerHTML = "Privacy Policy";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "Your Data Used for only News serving.";
  scrollVertical.scrollTo(0, 1950)

}
//for terms and conditions page 
function tc() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById("tc").style.color = "#1c39bd";
  document.getElementById('titleOfAgreementPage').innerHTML = "Terms and Conditions";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "News responsibility only for news provider Team.";
  scrollVertical.scrollTo(0, 1950)

}
//for job page 
function sitemap() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById("sitemap").style.color = "#1c39bd";
  document.getElementById('titleOfAgreementPage').innerHTML = "jobs";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "Apply class 7th to 12th+  students for writing 200-400 words digitally on your topic nash <a style="color:white;text-decoration:none;border-radius:4px;background:blue;padding:10px 20px;" href="https://wa.me/+918207529736/?text=Your Name(....) or Your Mobile Number(.....)">Apply Now</a>";
  scrollVertical.scrollTo(0, 1950)

}
//for close agreement page 
function CAgreement() {
  document.querySelector(".agreement").style.transform = "scale(0)";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("sitemap").style.color = "";
}
//show privacy page
function PPA() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById('titleOfAgreementPage').innerHTML = "Privacy Policy";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "Add paragraph of Contact us page write your about page content inside of this script.";
}
//show Terms and Conditions  page
function TCA() {
  document.querySelector(".agreement").style.transform = "scale(1)";
  document.getElementById('titleOfAgreementPage').innerHTML = "Terms and Conditions";
  document.getElementById('paragraphOfAgreementPage').innerHTML = "Add paragraph of Contact us page write your about page content inside of this script.";
}
//for opening terms and policy accepter 
setTimeout(function () {
  document.getElementById("policyAccepted").style.transform = "scale(1)";
}, 3000);
setTimeout(function () {
  document.getElementById("policyAccepted").style.transform = "scale(0)";
}, 7000);


//play video1 
function playVideo1() {
  document.getElementById("pause").style.transform = "scale(1)";
  document.getElementById("video1").play();
  document.getElementById("play").style.transform = "scale(0)";
}
//pause video1 
function pauseVideo1() {
  document.getElementById("pause").style.transform = "scale(0)";
  document.getElementById("video1").pause();
  document.getElementById("play").style.transform = "scale(1)";
}
