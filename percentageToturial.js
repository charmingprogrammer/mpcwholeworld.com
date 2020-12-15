function ShowResult(){
  var TotalMarks = document.myForm.TotalMarks.value;
  var YourMarks = document.myForm.YourMarks.value;
  var percentage = YourMarks/TotalMarks*100;
  document.getElementById("OutputRes").innerHTML = "Your Percentage :"+ percentage + "%";
  //for show output
  document.getElementById("OutputRes").style.bottom = "50%";
  return false;

}
//now check this 
//result is not in center
//so change some style 
//yooo guys perfect work please sub and share and like this video and i will see you in the next video by by take care..............
//yoo bro its working please like this video and subscribe now 