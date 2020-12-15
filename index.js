

//for toggle between right-bar class and right-bar if
function openChat() {
    document.getElementById("right-bar").style.width = "50%";

}
function hideChat() {
    document.getElementById("right-bar").style.width = "0%";

}
//for contact 
function contact() {
    document.getElementById("contact-us").style.display = "block";
}


//for cut 
function cut() {
    document.getElementById("contact-us").style.display = "none";
    document.getElementById("user-chat").style.display = "none";
}
//for open user chat 
function openUserChat() {
    document.getElementById("user-chat").style.display = "block";
}