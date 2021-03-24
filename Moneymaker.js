
// //display alert massage for help clits
// setTimeout(function() {
//   document.getElementById("alertMassage").style.transform ="scale(1)"
// }, 1000);
// //display alert massage for help clits
// setTimeout(function() {
//   document.getElementById("alertMassage").style.transform ="scale(0)"
// }, 3000);
function openNavigation() {
  var nevBar = (document.getElementById("navigation-list").style.transform =
    "scale(1)");
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
function closeNavigation() {
  var nevBar = (document.getElementById("navigation-list").style.transform =
    "scale(0)");
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// function loader() {
//   document.getElementById("containerForLoading").style.transform = "scale(0)";
// }
//task script
//laval 1 script
function openLaval1() {
  document.getElementById("Laval1").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  // document.getElementById("alertMassage").style.transform ="scale(1)"
  // document.getElementById("alertMassage").innerHTML = "compleat all tasks..."
  // setTimeout(function() {
  //   document.getElementById("alertMassage").style.transform ="scale(0)"
  // }, 2000);
}
function backLaval1() {
  document.getElementById("Laval1").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// laval 1 script end

//laval 2 script
function openLaval2() {
  document.getElementById("Laval2").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  // document.getElementById("alertMassage").style.transform ="scale(1)"
  // document.getElementById("alertMassage").innerHTML = "compleat all tasks..."
  // setTimeout(function() {
  //   document.getElementById("alertMassage").style.transform ="scale(0)"
  // }, 2000);
}
function backLaval2() {
  document.getElementById("Laval2").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// laval 2 script end

//laval 3 script
function openLaval3() {
  document.getElementById("Laval3").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  // document.getElementById("alertMassage").style.transform ="scale(1)"
  // document.getElementById("alertMassage").innerHTML = "compleat all tasks..."
  // setTimeout(function() {
  //   document.getElementById("alertMassage").style.transform ="scale(0)"
  // }, 3000);
}
function backLaval3() {
  document.getElementById("Laval3").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// laval 3 script end

//laval 4 script
function openLaval4() {
  document.getElementById("Laval4").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  // document.getElementById("alertMassage").style.transform ="scale(1)"
  // document.getElementById("alertMassage").innerHTML = "compleat all tasks..."
  // setTimeout(function() {
  //   document.getElementById("alertMassage").style.transform ="scale(0)"
  // }, 4000);
}
function backLaval4() {
  document.getElementById("Laval4").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// laval 4 script end

//laval 5 script
function openLaval5() {
  document.getElementById("Laval5").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  // document.getElementById("alertMassage").style.transform ="scale(1)"
  // document.getElementById("alertMassage").innerHTML = "compleat all tasks..."
  // setTimeout(function() {
  //   document.getElementById("alertMassage").style.transform ="scale(0)"
  // }, 5000);
}
function backLaval5() {
  document.getElementById("Laval5").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}
// laval 5 script end

function openWithdrawPage() {
  document.getElementById("containerForWithdraw").style.transform = "scale(1)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
  var x = document.getElementById("money").value;
  var y = document.getElementById("opt");
  y.innerHTML = x;
  if (document.getElementById("money").value === 70 + "Points") {
    document.getElementById("sendBtn").style.display = "block";
    document.getElementById("AlertWallet").style.display = "none";
  } else {
    document.getElementById("sendBtn").style.display = "none";
    // document.getElementById("AlertWallet").style.display = "block";
  }
}
function closeWithdrawPage() {
  document.getElementById("containerForWithdraw").style.transform = "scale(0)";
  var clickSound = document.getElementById("audioClick");
  // clickSound.play();
}

// interact with ads and passbook using laval 1 task 1
function Laval1Task1() {
  var value = (document.getElementById("money").value = "0");
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task1clicker1")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task1clicker1", compleat);
  var height = (document.getElementById("laval1task1clicker1").style.height =
    "300px");
  var width = (document.getElementById("laval1task1clicker1").style.width =
    "300px");
  localStorage.setItem("height", height);
  localStorage.setItem("width", width);
}
///height width get form LOCAL
var height = localStorage.getItem("height");
document.getElementById("laval1task1clicker1").style.height = height;

///height width get form LOCAL
var width = localStorage.getItem("width");
document.getElementById("laval1task1clicker1").style.widths = width;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task1clicker1");
document.getElementById("laval1task1clicker1").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 2
function Laval1Task2() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task2clicker2")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task2clicker2", compleat);
  var height2 = (document.getElementById("laval1task2clicker2").style.height =
    "300px");
  var width2 = (document.getElementById("laval1task2clicker2").style.width =
    "300px");
  localStorage.setItem("height2", height2);
  localStorage.setItem("width2", width2);
}
///height width get form LOCAL
var height2 = localStorage.getItem("height2");
document.getElementById("laval1task2clicker2").style.height = height2;

///height width get form LOCAL
var width2 = localStorage.getItem("width2");
document.getElementById("laval1task2clicker2").style.widths = width2;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task2clicker2");
document.getElementById("laval1task2clicker2").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 3
function Laval1Task3() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task3clicker3")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task3clicker3", compleat);
  var height3 = (document.getElementById("laval1task3clicker3").style.height =
    "300px");
  var width3 = (document.getElementById("laval1task3clicker3").style.width =
    "300px");
  localStorage.setItem("height3", height3);
  localStorage.setItem("width3", width3);
}
///height width get form LOCAL
var height3 = localStorage.getItem("height3");
document.getElementById("laval1task3clicker3").style.height = height3;

///height width get form LOCAL
var width3 = localStorage.getItem("width3");
document.getElementById("laval1task3clicker3").style.widths = width3;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task3clicker3");
document.getElementById("laval1task3clicker3").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 4
function Laval1Task4() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task4clicker4")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task4clicker4", compleat);
  var height4 = (document.getElementById("laval1task4clicker4").style.height =
    "300px");
  var width4 = (document.getElementById("laval1task4clicker4").style.width =
    "300px");
  localStorage.setItem("height4", height4);
  localStorage.setItem("width4", width4);
}
///height width get form LOCAL
var height4 = localStorage.getItem("height4");
document.getElementById("laval1task4clicker4").style.height = height4;

///height width get form LOCAL
var width4 = localStorage.getItem("width4");
document.getElementById("laval1task4clicker4").style.widths = width4;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task4clicker4");
document.getElementById("laval1task4clicker4").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval1Task5() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task5clicker5")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task5clicker5", compleat);
  var height5 = (document.getElementById("laval1task5clicker5").style.height =
    "300px");
  var width5 = (document.getElementById("laval1task5clicker5").style.width =
    "300px");
  localStorage.setItem("height5", height5);
  localStorage.setItem("width5", width5);
}
///height width get form LOCAL
var height5 = localStorage.getItem("height5");
document.getElementById("laval1task5clicker5").style.height = height5;

///height width get form LOCAL
var width5 = localStorage.getItem("width5");
document.getElementById("laval1task5clicker5").style.widths = width5;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task5clicker5");
document.getElementById("laval1task5clicker5").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 6
function Laval1Task6() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task6clicker6")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task6clicker6", compleat);
  var height6 = (document.getElementById("laval1task6clicker6").style.height =
    "300px");
  var width6 = (document.getElementById("laval1task6clicker6").style.width =
    "300px");
  localStorage.setItem("height6", height6);
  localStorage.setItem("width6", width6);
}
///height width get form LOCAL
var height6 = localStorage.getItem("height6");
document.getElementById("laval1task6clicker6").style.height = height6;

///height width get form LOCAL
var width6 = localStorage.getItem("width6");
document.getElementById("laval1task6clicker6").style.widths = width6;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task6clicker6");
document.getElementById("laval1task6clicker6").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 7
function Laval1Task7() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task7clicker7")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task7clicker7", compleat);
  var height7 = (document.getElementById("laval1task7clicker7").style.height =
    "300px");
  var width7 = (document.getElementById("laval1task7clicker7").style.width =
    "300px");
  localStorage.setItem("height7", height7);
  localStorage.setItem("width7", width7);
}
///height width get form LOCAL
var height7 = localStorage.getItem("height7");
document.getElementById("laval1task7clicker7").style.height = height7;

///height width get form LOCAL
var width7 = localStorage.getItem("width7");
document.getElementById("laval1task7clicker7").style.widths = width7;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task7clicker7");
document.getElementById("laval1task7clicker7").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 8
function Laval1Task8() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task8clicker8")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task8clicker8", compleat);
  var height8 = (document.getElementById("laval1task8clicker8").style.height =
    "300px");
  var width8 = (document.getElementById("laval1task8clicker8").style.width =
    "300px");
  localStorage.setItem("height8", height8);
  localStorage.setItem("width8", width8);
}
///height width get form LOCAL
var height8 = localStorage.getItem("height8");
document.getElementById("laval1task8clicker8").style.height = height8;

///height width get form LOCAL
var width8 = localStorage.getItem("width8");
document.getElementById("laval1task8clicker8").style.widths = width8;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task8clicker8");
document.getElementById("laval1task8clicker8").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 9
function Laval1Task9() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task9clicker9")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task9clicker9", compleat);
  var height9 = (document.getElementById("laval1task9clicker9").style.height =
    "300px");
  var width9 = (document.getElementById("laval1task9clicker9").style.width =
    "300px");
  localStorage.setItem("height9", height9);
  localStorage.setItem("width9", width9);
}
///height width get form LOCAL
var height9 = localStorage.getItem("height9");
document.getElementById("laval1task9clicker9").style.height = height9;

///height width get form LOCAL
var width9 = localStorage.getItem("width9");
document.getElementById("laval1task9clicker9").style.widths = width9;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task9clicker9");
document.getElementById("laval1task9clicker9").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 10
function Laval1Task10() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval1task10clicker10")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval1task10clicker10", compleat);
  var height10 = (document.getElementById(
    "laval1task10clicker10"
  ).style.height = "300px");
  var width10 = (document.getElementById("laval1task10clicker10").style.width =
    "300px");
  localStorage.setItem("height10", height10);
  localStorage.setItem("width10", width10);
  //display laval 1 compleat massage
  var massage = (document.getElementById("laval1Compleat").style.display =
    "block");
  localStorage.setItem("laval1Compleat", massage);
}
///height width get form LOCAL
var height10 = localStorage.getItem("height10");
document.getElementById("laval1task10clicker10").style.height = height10;

///height width get form LOCAL
var width10 = localStorage.getItem("width10");
document.getElementById("laval1task10clicker10").style.widths = width10;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval1task10clicker10");
document.getElementById("laval1task10clicker10").innerHTML = compleatMassGet;

//laval 1 compleat
document.getElementById("laval1Compleat").innerHTML =
  "(" + compleatMassGet + ")";
//display compleat massage
var GetMassage = localStorage.getItem("laval1Compleat");
document.getElementById("laval1Compleat").style.display = GetMassage;

/////////////////////////////////////////////////////////
// interact with ads and passbook using laval 2 task 1
function Laval2Task1() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task1clicker1")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task1clicker1", compleat);
  var laval2height = (document.getElementById(
    "laval2task1clicker1"
  ).style.height = "300px");
  var laval2width = (document.getElementById(
    "laval2task1clicker1"
  ).style.width = "300px");
  localStorage.setItem("laval2height", laval2height);
  localStorage.setItem("laval2width", laval2width);
}
///height width get form LOCAL
var laval2height = localStorage.getItem("laval2height");
document.getElementById("laval2task1clicker1").style.height = laval2height;

///height width get form LOCAL
var laval2width = localStorage.getItem("laval2width");
document.getElementById("laval2task1clicker1").style.widths = laval2width;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task1clicker1");
document.getElementById("laval2task1clicker1").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 2
function Laval2Task2() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task2clicker2")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task2clicker2", compleat);
  var laval2height2 = (document.getElementById(
    "laval2task2clicker2"
  ).style.height = "300px");
  var laval2width2 = (document.getElementById(
    "laval2task2clicker2"
  ).style.width = "300px");
  localStorage.setItem("laval2height2", laval2height2);
  localStorage.setItem("laval2width2", laval2width2);
}
///height width get form LOCAL
var laval2height2 = localStorage.getItem("laval2height2");
document.getElementById("laval2task2clicker2").style.height = laval2height2;

///height width get form LOCAL
var laval2width2 = localStorage.getItem("laval2width2");
document.getElementById("laval2task2clicker2").style.widths = laval2width2;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task2clicker2");
document.getElementById("laval2task2clicker2").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 3
function Laval2Task3() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task3clicker3")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task3clicker3", compleat);
  var laval2height3 = (document.getElementById(
    "laval2task3clicker3"
  ).style.height = "300px");
  var laval2width3 = (document.getElementById(
    "laval2task3clicker3"
  ).style.width = "300px");
  localStorage.setItem("laval2height3", laval2height3);
  localStorage.setItem("laval2width3", laval2width3);
}
///height width get form LOCAL
var laval2height3 = localStorage.getItem("laval2height3");
document.getElementById("laval2task3clicker3").style.height = laval2height3;

///height width get form LOCAL
var laval2width3 = localStorage.getItem("laval2width3");
document.getElementById("laval2task3clicker3").style.widths = laval2width3;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task3clicker3");
document.getElementById("laval2task3clicker3").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 4
function Laval2Task4() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task4clicker4")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task4clicker4", compleat);
  var laval2height4 = (document.getElementById(
    "laval2task4clicker4"
  ).style.height = "300px");
  var laval2width4 = (document.getElementById(
    "laval2task4clicker4"
  ).style.width = "300px");
  localStorage.setItem("laval2height4", laval2height4);
  localStorage.setItem("laval2width4", laval2width4);
}
///height width get form LOCAL
var laval2height4 = localStorage.getItem("laval2height4");
document.getElementById("laval2task4clicker4").style.height = laval2height4;

///height width get form LOCAL
var laval2width4 = localStorage.getItem("laval2width4");
document.getElementById("laval2task4clicker4").style.widths = laval2width4;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task4clicker4");
document.getElementById("laval2task4clicker4").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval2Task5() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task5clicker5")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task5clicker5", compleat);
  var laval2height5 = (document.getElementById(
    "laval2task5clicker5"
  ).style.height = "300px");
  var laval2width5 = (document.getElementById(
    "laval2task5clicker5"
  ).style.width = "300px");
  localStorage.setItem("laval2height5", laval2height5);
  localStorage.setItem("laval2width5", laval2width5);
}
///height width get form LOCAL
var laval2height5 = localStorage.getItem("laval2height5");
document.getElementById("laval2task5clicker5").style.height = laval2height5;

///height width get form LOCAL
var laval2width5 = localStorage.getItem("laval2width5");
document.getElementById("laval2task5clicker5").style.widths = laval2width5;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task5clicker5");
document.getElementById("laval2task5clicker5").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 6
function Laval2Task6() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task6clicker6")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task6clicker6", compleat);
  var laval2height6 = (document.getElementById(
    "laval2task6clicker6"
  ).style.height = "300px");
  var laval2width6 = (document.getElementById(
    "laval2task6clicker6"
  ).style.width = "300px");
  localStorage.setItem("laval2height6", laval2height6);
  localStorage.setItem("laval2width6", laval2width6);
}
///height width get form LOCAL
var laval2height6 = localStorage.getItem("laval2height6");
document.getElementById("laval2task6clicker6").style.height = laval2height6;

///height width get form LOCAL
var laval2width6 = localStorage.getItem("laval2width6");
document.getElementById("laval2task6clicker6").style.widths = laval2width6;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task6clicker6");
document.getElementById("laval2task6clicker6").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 7
function Laval2Task7() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task7clicker7")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task7clicker7", compleat);
  var laval2height7 = (document.getElementById(
    "laval2task7clicker7"
  ).style.height = "300px");
  var laval2width7 = (document.getElementById(
    "laval2task7clicker7"
  ).style.width = "300px");
  localStorage.setItem("laval2height7", laval2height7);
  localStorage.setItem("laval2width7", laval2width7);
}
///height width get form LOCAL
var laval2height7 = localStorage.getItem("laval2height7");
document.getElementById("laval2task7clicker7").style.height = laval2height7;

///height width get form LOCAL
var laval2width7 = localStorage.getItem("laval2width7");
document.getElementById("laval2task7clicker7").style.widths = laval2width7;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task7clicker7");
document.getElementById("laval2task7clicker7").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 8
function Laval2Task8() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task8clicker8")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task8clicker8", compleat);
  var laval2height8 = (document.getElementById(
    "laval2task8clicker8"
  ).style.height = "300px");
  var laval2width8 = (document.getElementById(
    "laval2task8clicker8"
  ).style.width = "300px");
  localStorage.setItem("laval2height8", laval2height8);
  localStorage.setItem("laval2width8", laval2width8);
}
///height width get form LOCAL
var laval2height8 = localStorage.getItem("laval2height8");
document.getElementById("laval2task8clicker8").style.height = laval2height8;

///height width get form LOCAL
var laval2width8 = localStorage.getItem("laval2width8");
document.getElementById("laval2task8clicker8").style.widths = laval2width8;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task8clicker8");
document.getElementById("laval2task8clicker8").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 9
function Laval2Task9() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task9clicker9")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task9clicker9", compleat);
  var laval2height9 = (document.getElementById(
    "laval2task9clicker9"
  ).style.height = "300px");
  var laval2width9 = (document.getElementById(
    "laval2task9clicker9"
  ).style.width = "300px");
  localStorage.setItem("laval2height9", laval2height9);
  localStorage.setItem("laval2width9", laval2width9);
}
///height width get form LOCAL
var laval2height9 = localStorage.getItem("laval2height9");
document.getElementById("laval2task9clicker9").style.height = laval2height9;

///height width get form LOCAL
var laval2width9 = localStorage.getItem("laval2width9");
document.getElementById("laval2task9clicker9").style.widths = laval2width9;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task9clicker9");
document.getElementById("laval2task9clicker9").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 10
function Laval2Task10() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h2");
  var createdElement = document
    .getElementById("laval2task10clicker10")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval2task10clicker10", compleat);
  var laval2height10 = (document.getElementById(
    "laval2task10clicker10"
  ).style.height = "300px");
  var laval2width10 = (document.getElementById(
    "laval2task10clicker10"
  ).style.width = "300px");
  localStorage.setItem("laval2height10", laval2height10);
  localStorage.setItem("laval2width10", laval2width10);
  //display laval 1 compleat massage
  var massage = (document.getElementById("laval2Compleat").style.display =
    "block");
  localStorage.setItem("laval2Compleat", massage);
}
///height width get form LOCAL
var laval2height10 = localStorage.getItem("laval2height10");
document.getElementById("laval2task10clicker10").style.height = laval2height10;

///height width get form LOCAL
var laval2width10 = localStorage.getItem("laval2width10");
document.getElementById("laval2task10clicker10").style.widths = laval2width10;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval2task10clicker10");
document.getElementById("laval2task10clicker10").innerHTML = compleatMassGet;

//laval 2 compleat
document.getElementById("laval2Compleat").innerHTML =
  "(" + compleatMassGet + ")";
//display compleat massage
var GetMassage = localStorage.getItem("laval2Compleat");
document.getElementById("laval2Compleat").style.display = GetMassage;
////////////////////////////////////
/////////////////////////////////////////////////////////
// interact with ads and passbook using laval 3 task 1
function Laval3Task1() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task1clicker1")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task1clicker1", compleat);
  var laval3height = (document.getElementById(
    "laval3task1clicker1"
  ).style.height = "300px");
  var laval3width = (document.getElementById(
    "laval3task1clicker1"
  ).style.width = "300px");
  localStorage.setItem("laval3height", laval3height);
  localStorage.setItem("laval3width", laval3width);
}
///height width get form LOCAL
var laval3height = localStorage.getItem("laval3height");
document.getElementById("laval3task1clicker1").style.height = laval3height;

///height width get form LOCAL
var laval3width = localStorage.getItem("laval3width");
document.getElementById("laval3task1clicker1").style.widths = laval3width;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task1clicker1");
document.getElementById("laval3task1clicker1").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 3 task 3
function Laval3Task2() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task2clicker2")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task2clicker2", compleat);
  var laval3height2 = (document.getElementById(
    "laval3task2clicker2"
  ).style.height = "300px");
  var laval3width2 = (document.getElementById(
    "laval3task2clicker2"
  ).style.width = "300px");
  localStorage.setItem("laval3height2", laval3height2);
  localStorage.setItem("laval3width2", laval3width2);
}
///height width get form LOCAL
var laval3height2 = localStorage.getItem("laval3height2");
document.getElementById("laval3task2clicker2").style.height = laval3height2;

///height width get form LOCAL
var laval3width2 = localStorage.getItem("laval3width2");
document.getElementById("laval3task2clicker2").style.widths = laval3width2;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task2clicker2");
document.getElementById("laval3task2clicker2").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 3
function Laval3Task3() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task3clicker3")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task3clicker3", compleat);
  var laval3height3 = (document.getElementById(
    "laval3task3clicker3"
  ).style.height = "300px");
  var laval3width3 = (document.getElementById(
    "laval3task3clicker3"
  ).style.width = "300px");
  localStorage.setItem("laval3height3", laval3height3);
  localStorage.setItem("laval3width3", laval3width3);
}
///height width get form LOCAL
var laval3height3 = localStorage.getItem("laval3height3");
document.getElementById("laval3task3clicker3").style.height = laval3height3;

///height width get form LOCAL
var laval3width3 = localStorage.getItem("laval3width3");
document.getElementById("laval3task3clicker3").style.widths = laval3width3;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task3clicker3");
document.getElementById("laval3task3clicker3").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 4
function Laval3Task4() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task4clicker4")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task4clicker4", compleat);
  var laval3height4 = (document.getElementById(
    "laval3task4clicker4"
  ).style.height = "300px");
  var laval3width4 = (document.getElementById(
    "laval3task4clicker4"
  ).style.width = "300px");
  localStorage.setItem("laval3height4", laval3height4);
  localStorage.setItem("laval3width4", laval3width4);
}
///height width get form LOCAL
var laval3height4 = localStorage.getItem("laval3height4");
document.getElementById("laval3task4clicker4").style.height = laval3height4;

///height width get form LOCAL
var laval3width4 = localStorage.getItem("laval3width4");
document.getElementById("laval3task4clicker4").style.widths = laval3width4;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task4clicker4");
document.getElementById("laval3task4clicker4").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval3Task5() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task5clicker5")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task5clicker5", compleat);
  var laval3height5 = (document.getElementById(
    "laval3task5clicker5"
  ).style.height = "300px");
  var laval3width5 = (document.getElementById(
    "laval3task5clicker5"
  ).style.width = "300px");
  localStorage.setItem("laval3height5", laval3height5);
  localStorage.setItem("laval3width5", laval3width5);
}
///height width get form LOCAL
var laval3height5 = localStorage.getItem("laval3height5");
document.getElementById("laval3task5clicker5").style.height = laval3height5;

///height width get form LOCAL
var laval3width5 = localStorage.getItem("laval3width5");
document.getElementById("laval3task5clicker5").style.widths = laval3width5;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task5clicker5");
document.getElementById("laval3task5clicker5").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 6
function Laval3Task6() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task6clicker6")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task6clicker6", compleat);
  var laval3height6 = (document.getElementById(
    "laval3task6clicker6"
  ).style.height = "300px");
  var laval3width6 = (document.getElementById(
    "laval3task6clicker6"
  ).style.width = "300px");
  localStorage.setItem("laval3height6", laval3height6);
  localStorage.setItem("laval3width6", laval3width6);
}
///height width get form LOCAL
var laval3height6 = localStorage.getItem("laval3height6");
document.getElementById("laval3task6clicker6").style.height = laval3height6;

///height width get form LOCAL
var laval3width6 = localStorage.getItem("laval3width6");
document.getElementById("laval3task6clicker6").style.widths = laval3width6;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task6clicker6");
document.getElementById("laval3task6clicker6").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 7
function Laval3Task7() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task7clicker7")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task7clicker7", compleat);
  var laval3height7 = (document.getElementById(
    "laval3task7clicker7"
  ).style.height = "300px");
  var laval3width7 = (document.getElementById(
    "laval3task7clicker7"
  ).style.width = "300px");
  localStorage.setItem("laval3height7", laval3height7);
  localStorage.setItem("laval3width7", laval3width7);
}
///height width get form LOCAL
var laval3height7 = localStorage.getItem("laval3height7");
document.getElementById("laval3task7clicker7").style.height = laval3height7;

///height width get form LOCAL
var laval3width7 = localStorage.getItem("laval3width7");
document.getElementById("laval3task7clicker7").style.widths = laval3width7;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task7clicker7");
document.getElementById("laval3task7clicker7").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 8
function Laval3Task8() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task8clicker8")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task8clicker8", compleat);
  var laval3height8 = (document.getElementById(
    "laval3task8clicker8"
  ).style.height = "300px");
  var laval3width8 = (document.getElementById(
    "laval3task8clicker8"
  ).style.width = "300px");
  localStorage.setItem("laval3height8", laval3height8);
  localStorage.setItem("laval3width8", laval3width8);
}
///height width get form LOCAL
var laval3height8 = localStorage.getItem("laval3height8");
document.getElementById("laval3task8clicker8").style.height = laval3height8;

///height width get form LOCAL
var laval3width8 = localStorage.getItem("laval3width8");
document.getElementById("laval3task8clicker8").style.widths = laval3width8;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task8clicker8");
document.getElementById("laval3task8clicker8").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 9
function Laval3Task9() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task9clicker9")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task9clicker9", compleat);
  var laval3height9 = (document.getElementById(
    "laval3task9clicker9"
  ).style.height = "300px");
  var laval3width9 = (document.getElementById(
    "laval3task9clicker9"
  ).style.width = "300px");
  localStorage.setItem("laval3height9", laval3height9);
  localStorage.setItem("laval3width9", laval3width9);
}
///height width get form LOCAL
var laval3height9 = localStorage.getItem("laval3height9");
document.getElementById("laval3task9clicker9").style.height = laval3height9;

///height width get form LOCAL
var laval3width9 = localStorage.getItem("laval3width9");
document.getElementById("laval3task9clicker9").style.widths = laval3width9;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task9clicker9");
document.getElementById("laval3task9clicker9").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 10
function Laval3Task10() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval3task10clicker10")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval3task10clicker10", compleat);
  var laval3height10 = (document.getElementById(
    "laval3task10clicker10"
  ).style.height = "300px");
  var laval3width10 = (document.getElementById(
    "laval3task10clicker10"
  ).style.width = "300px");
  localStorage.setItem("laval3height10", laval3height10);
  localStorage.setItem("laval3width10", laval3width10);
  //display laval 1 compleat massage
  var massage = (document.getElementById("laval3Compleat").style.display =
    "block");
  localStorage.setItem("laval3Compleat", massage);
}
///height width get form LOCAL
var laval3height10 = localStorage.getItem("laval3height10");
document.getElementById("laval3task10clicker10").style.height = laval3height10;

///height width get form LOCAL
var laval3width10 = localStorage.getItem("laval3width10");
document.getElementById("laval3task10clicker10").style.widths = laval3width10;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval3task10clicker10");
document.getElementById("laval3task10clicker10").innerHTML = compleatMassGet;

//laval 3 compleat
document.getElementById("laval3Compleat").innerHTML =
  "(" + compleatMassGet + ")";
//display compleat massage
var GetMassage = localStorage.getItem("laval3Compleat");
document.getElementById("laval3Compleat").style.display = GetMassage;
////////////////////////////////////
/////////////////////////////////////////////////////////
// interact with ads and passbook using laval 4 task 1
function Laval4Task1() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h3");
  var createdElement = document
    .getElementById("laval4task1clicker1")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task1clicker1", compleat);
  var laval4height = (document.getElementById(
    "laval4task1clicker1"
  ).style.height = "400px");
  var laval4width = (document.getElementById(
    "laval4task1clicker1"
  ).style.width = "400px");
  localStorage.setItem("laval4height", laval4height);
  localStorage.setItem("laval4width", laval4width);
}
///height width get form LOCAL
var laval4height = localStorage.getItem("laval4height");
document.getElementById("laval4task1clicker1").style.height = laval4height;

///height width get form LOCAL
var laval4width = localStorage.getItem("laval4width");
document.getElementById("laval4task1clicker1").style.widths = laval4width;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task1clicker1");
document.getElementById("laval4task1clicker1").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 2
function Laval4Task2() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task2clicker2")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task2clicker2", compleat);
  var laval4height2 = (document.getElementById(
    "laval4task2clicker2"
  ).style.height = "300px");
  var laval4width2 = (document.getElementById(
    "laval4task2clicker2"
  ).style.width = "300px");
  localStorage.setItem("laval4height2", laval4height2);
  localStorage.setItem("laval4width2", laval4width2);
}
///height width get form LOCAL
var laval4height2 = localStorage.getItem("laval4height2");
document.getElementById("laval4task2clicker2").style.height = laval4height2;

///height width get form LOCAL
var laval4width2 = localStorage.getItem("laval4width2");
document.getElementById("laval4task2clicker2").style.widths = laval4width2;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task2clicker2");
document.getElementById("laval4task2clicker2").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 3
function Laval4Task3() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task3clicker3")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task3clicker3", compleat);
  var laval4height3 = (document.getElementById(
    "laval4task3clicker3"
  ).style.height = "300px");
  var laval4width3 = (document.getElementById(
    "laval4task3clicker3"
  ).style.width = "300px");
  localStorage.setItem("laval4height3", laval4height3);
  localStorage.setItem("laval4width3", laval4width3);
}
///height width get form LOCAL
var laval4height3 = localStorage.getItem("laval4height3");
document.getElementById("laval4task3clicker3").style.height = laval4height3;

///height width get form LOCAL
var laval4width3 = localStorage.getItem("laval4width3");
document.getElementById("laval4task3clicker3").style.widths = laval4width3;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task3clicker3");
document.getElementById("laval4task3clicker3").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 4
function Laval4Task4() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task4clicker4")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task4clicker4", compleat);
  var laval4height4 = (document.getElementById(
    "laval4task4clicker4"
  ).style.height = "300px");
  var laval4width4 = (document.getElementById(
    "laval4task4clicker4"
  ).style.width = "300px");
  localStorage.setItem("laval4height4", laval4height4);
  localStorage.setItem("laval4width4", laval4width4);
}
///height width get form LOCAL
var laval4height4 = localStorage.getItem("laval4height4");
document.getElementById("laval4task4clicker4").style.height = laval4height4;

///height width get form LOCAL
var laval4width4 = localStorage.getItem("laval4width4");
document.getElementById("laval4task4clicker4").style.widths = laval4width4;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task4clicker4");
document.getElementById("laval4task4clicker4").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval4Task5() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task5clicker5")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task5clicker5", compleat);
  var laval4height5 = (document.getElementById(
    "laval4task5clicker5"
  ).style.height = "300px");
  var laval4width5 = (document.getElementById(
    "laval4task5clicker5"
  ).style.width = "300px");
  localStorage.setItem("laval4height5", laval4height5);
  localStorage.setItem("laval4width5", laval4width5);
}
///height width get form LOCAL
var laval4height5 = localStorage.getItem("laval4height5");
document.getElementById("laval4task5clicker5").style.height = laval4height5;

///height width get form LOCAL
var laval4width5 = localStorage.getItem("laval4width5");
document.getElementById("laval4task5clicker5").style.widths = laval4width5;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task5clicker5");
document.getElementById("laval4task5clicker5").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 6
function Laval4Task6() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task6clicker6")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task6clicker6", compleat);
  var laval4height6 = (document.getElementById(
    "laval4task6clicker6"
  ).style.height = "300px");
  var laval4width6 = (document.getElementById(
    "laval4task6clicker6"
  ).style.width = "300px");
  localStorage.setItem("laval4height6", laval4height6);
  localStorage.setItem("laval4width6", laval4width6);
}
///height width get form LOCAL
var laval4height6 = localStorage.getItem("laval4height6");
document.getElementById("laval4task6clicker6").style.height = laval4height6;

///height width get form LOCAL
var laval4width6 = localStorage.getItem("laval4width6");
document.getElementById("laval4task6clicker6").style.widths = laval4width6;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task6clicker6");
document.getElementById("laval4task6clicker6").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 7
function Laval4Task7() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task7clicker7")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task7clicker7", compleat);
  var laval4height7 = (document.getElementById(
    "laval4task7clicker7"
  ).style.height = "300px");
  var laval4width7 = (document.getElementById(
    "laval4task7clicker7"
  ).style.width = "300px");
  localStorage.setItem("laval4height7", laval4height7);
  localStorage.setItem("laval4width7", laval4width7);
}
///height width get form LOCAL
var laval4height7 = localStorage.getItem("laval4height7");
document.getElementById("laval4task7clicker7").style.height = laval4height7;

///height width get form LOCAL
var laval4width7 = localStorage.getItem("laval4width7");
document.getElementById("laval4task7clicker7").style.widths = laval4width7;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task7clicker7");
document.getElementById("laval4task7clicker7").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 8
function Laval4Task8() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task8clicker8")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task8clicker8", compleat);
  var laval4height8 = (document.getElementById(
    "laval4task8clicker8"
  ).style.height = "300px");
  var laval4width8 = (document.getElementById(
    "laval4task8clicker8"
  ).style.width = "300px");
  localStorage.setItem("laval4height8", laval4height8);
  localStorage.setItem("laval4width8", laval4width8);
}
///height width get form LOCAL
var laval4height8 = localStorage.getItem("laval4height8");
document.getElementById("laval4task8clicker8").style.height = laval4height8;

///height width get form LOCAL
var laval4width8 = localStorage.getItem("laval4width8");
document.getElementById("laval4task8clicker8").style.widths = laval4width8;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task8clicker8");
document.getElementById("laval4task8clicker8").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 9
function Laval4Task9() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task9clicker9")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task9clicker9", compleat);
  var laval4height9 = (document.getElementById(
    "laval4task9clicker9"
  ).style.height = "300px");
  var laval4width9 = (document.getElementById(
    "laval4task9clicker9"
  ).style.width = "300px");
  localStorage.setItem("laval4height9", laval4height9);
  localStorage.setItem("laval4width9", laval4width9);
}
///height width get form LOCAL
var laval4height9 = localStorage.getItem("laval4height9");
document.getElementById("laval4task9clicker9").style.height = laval4height9;

///height width get form LOCAL
var laval4width9 = localStorage.getItem("laval4width9");
document.getElementById("laval4task9clicker9").style.widths = laval4width9;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task9clicker9");
document.getElementById("laval4task9clicker9").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 10
function Laval4Task10() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h4");
  var createdElement = document
    .getElementById("laval4task10clicker10")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval4task10clicker10", compleat);
  var laval4height10 = (document.getElementById(
    "laval4task10clicker10"
  ).style.height = "300px");
  var laval4width10 = (document.getElementById(
    "laval4task10clicker10"
  ).style.width = "300px");
  localStorage.setItem("laval4height10", laval4height10);
  localStorage.setItem("laval4width10", laval4width10);
  //display laval 1 compleat massage
  var massage = (document.getElementById("laval4Compleat").style.display =
    "block");
  localStorage.setItem("laval4Compleat", massage);
}
///height width get form LOCAL
var laval4height10 = localStorage.getItem("laval4height10");
document.getElementById("laval4task10clicker10").style.height = laval4height10;

///height width get form LOCAL
var laval4width10 = localStorage.getItem("laval4width10");
document.getElementById("laval4task10clicker10").style.widths = laval4width10;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval4task10clicker10");
document.getElementById("laval4task10clicker10").innerHTML = compleatMassGet;

//laval 4 compleat
document.getElementById("laval4Compleat").innerHTML =
  "(" + compleatMassGet + ")";
//display compleat massage
var GetMassage = localStorage.getItem("laval4Compleat");
document.getElementById("laval4Compleat").style.display = GetMassage;
////////////////////////////////////
/////////////////////////////////////////////////////////
// interact with ads and passbook using laval 5 task 1
function Laval5Task1() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task1clicker1")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task1clicker1", compleat);
  var laval5height = (document.getElementById(
    "laval5task1clicker1"
  ).style.height = "300px");
  var laval5width = (document.getElementById(
    "laval5task1clicker1"
  ).style.width = "300px");
  localStorage.setItem("laval5height", laval5height);
  localStorage.setItem("laval5width", laval5width);
}
///height width get form LOCAL
var laval5height = localStorage.getItem("laval5height");
document.getElementById("laval5task1clicker1").style.height = laval5height;

///height width get form LOCAL
var laval5width = localStorage.getItem("laval5width");
document.getElementById("laval5task1clicker1").style.widths = laval5width;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task1clicker1");
document.getElementById("laval5task1clicker1").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval5Task2() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task2clicker2")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task2clicker2", compleat);
  var laval5height2 = (document.getElementById(
    "laval5task2clicker2"
  ).style.height = "300px");
  var laval5width2 = (document.getElementById(
    "laval5task2clicker2"
  ).style.width = "300px");
  localStorage.setItem("laval5height2", laval5height2);
  localStorage.setItem("laval5width2", laval5width2);
}
///height width get form LOCAL
var laval5height2 = localStorage.getItem("laval5height2");
document.getElementById("laval5task2clicker2").style.height = laval5height2;

///height width get form LOCAL
var laval5width2 = localStorage.getItem("laval5width2");
document.getElementById("laval5task2clicker2").style.widths = laval5width2;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task2clicker2");
document.getElementById("laval5task2clicker2").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 3
function Laval5Task3() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task3clicker3")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task3clicker3", compleat);
  var laval5height3 = (document.getElementById(
    "laval5task3clicker3"
  ).style.height = "300px");
  var laval5width3 = (document.getElementById(
    "laval5task3clicker3"
  ).style.width = "300px");
  localStorage.setItem("laval5height3", laval5height3);
  localStorage.setItem("laval5width3", laval5width3);
}
///height width get form LOCAL
var laval5height3 = localStorage.getItem("laval5height3");
document.getElementById("laval5task3clicker3").style.height = laval5height3;

///height width get form LOCAL
var laval5width3 = localStorage.getItem("laval5width3");
document.getElementById("laval5task3clicker3").style.widths = laval5width3;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task3clicker3");
document.getElementById("laval5task3clicker3").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 4
function Laval5Task4() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task4clicker4")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task4clicker4", compleat);
  var laval5height4 = (document.getElementById(
    "laval5task4clicker4"
  ).style.height = "300px");
  var laval5width4 = (document.getElementById(
    "laval5task4clicker4"
  ).style.width = "300px");
  localStorage.setItem("laval5height4", laval5height4);
  localStorage.setItem("laval5width4", laval5width4);
}
///height width get form LOCAL
var laval5height4 = localStorage.getItem("laval5height4");
document.getElementById("laval5task4clicker4").style.height = laval5height4;

///height width get form LOCAL
var laval5width4 = localStorage.getItem("laval5width4");
document.getElementById("laval5task4clicker4").style.widths = laval5width4;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task4clicker4");
document.getElementById("laval5task4clicker4").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 5
function Laval5Task5() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task5clicker5")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task5clicker5", compleat);
  var laval5height5 = (document.getElementById(
    "laval5task5clicker5"
  ).style.height = "300px");
  var laval5width5 = (document.getElementById(
    "laval5task5clicker5"
  ).style.width = "300px");
  localStorage.setItem("laval5height5", laval5height5);
  localStorage.setItem("laval5width5", laval5width5);
}
///height width get form LOCAL
var laval5height5 = localStorage.getItem("laval5height5");
document.getElementById("laval5task5clicker5").style.height = laval5height5;

///height width get form LOCAL
var laval5width5 = localStorage.getItem("laval5width5");
document.getElementById("laval5task5clicker5").style.widths = laval5width5;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task5clicker5");
document.getElementById("laval5task5clicker5").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 6
function Laval5Task6() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task6clicker6")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task6clicker6", compleat);
  var laval5height6 = (document.getElementById(
    "laval5task6clicker6"
  ).style.height = "300px");
  var laval5width6 = (document.getElementById(
    "laval5task6clicker6"
  ).style.width = "300px");
  localStorage.setItem("laval5height6", laval5height6);
  localStorage.setItem("laval5width6", laval5width6);
}
///height width get form LOCAL
var laval5height6 = localStorage.getItem("laval5height6");
document.getElementById("laval5task6clicker6").style.height = laval5height6;

///height width get form LOCAL
var laval5width6 = localStorage.getItem("laval5width6");
document.getElementById("laval5task6clicker6").style.widths = laval5width6;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task6clicker6");
document.getElementById("laval5task6clicker6").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 7
function Laval5Task7() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task7clicker7")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task7clicker7", compleat);
  var laval5height7 = (document.getElementById(
    "laval5task7clicker7"
  ).style.height = "300px");
  var laval5width7 = (document.getElementById(
    "laval5task7clicker7"
  ).style.width = "300px");
  localStorage.setItem("laval5height7", laval5height7);
  localStorage.setItem("laval5width7", laval5width7);
}
///height width get form LOCAL
var laval5height7 = localStorage.getItem("laval5height7");
document.getElementById("laval5task7clicker7").style.height = laval5height7;

///height width get form LOCAL
var laval5width7 = localStorage.getItem("laval5width7");
document.getElementById("laval5task7clicker7").style.widths = laval5width7;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task7clicker7");
document.getElementById("laval5task7clicker7").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 8
function Laval5Task8() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task8clicker8")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task8clicker8", compleat);
  var laval5height8 = (document.getElementById(
    "laval5task8clicker8"
  ).style.height = "300px");
  var laval5width8 = (document.getElementById(
    "laval5task8clicker8"
  ).style.width = "300px");
  localStorage.setItem("laval5height8", laval5height8);
  localStorage.setItem("laval5width8", laval5width8);
}
///height width get form LOCAL
var laval5height8 = localStorage.getItem("laval5height8");
document.getElementById("laval5task8clicker8").style.height = laval5height8;

///height width get form LOCAL
var laval5width8 = localStorage.getItem("laval5width8");
document.getElementById("laval5task8clicker8").style.widths = laval5width8;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task8clicker8");
document.getElementById("laval5task8clicker8").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 9
function Laval5Task9() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task9clicker9")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task9clicker9", compleat);
  var laval5height9 = (document.getElementById(
    "laval5task9clicker9"
  ).style.height = "300px");
  var laval5width9 = (document.getElementById(
    "laval5task9clicker9"
  ).style.width = "300px");
  localStorage.setItem("laval5height9", laval5height9);
  localStorage.setItem("laval5width9", laval5width9);
}
///height width get form LOCAL
var laval5height9 = localStorage.getItem("laval5height9");
document.getElementById("laval5task9clicker9").style.height = laval5height9;

///height width get form LOCAL
var laval5width9 = localStorage.getItem("laval5width9");
document.getElementById("laval5task9clicker9").style.widths = laval5width9;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task9clicker9");
document.getElementById("laval5task9clicker9").innerHTML = compleatMassGet;

//interact with ads and passbook using laval 1 task 10
function Laval5Task10() {
  var value = document.getElementById("money").value;
  var convertInt = parseInt(value);
  var valueAdd = convertInt + 10;
  localStorage.setItem("money", valueAdd);
  var createElement = document.createElement("h5");
  var createdElement = document
    .getElementById("laval5task10clicker10")
    .appendChild(createElement);
  var compleat = (createdElement.innerHTML = "COMPLEAT");
  localStorage.setItem("laval5task10clicker10", compleat);
  var laval5height10 = (document.getElementById(
    "laval5task10clicker10"
  ).style.height = "300px");
  var laval5width10 = (document.getElementById(
    "laval5task10clicker10"
  ).style.width = "300px");
  localStorage.setItem("laval5height10", laval5height10);
  localStorage.setItem("laval5width10", laval5width10);
  //display laval 1 compleat massage
  var massage = (document.getElementById("laval5Compleat").style.display =
    "block");
  localStorage.setItem("laval5Compleat", massage);
}
///height width get form LOCAL
var laval5height10 = localStorage.getItem("laval5height10");
document.getElementById("laval5task10clicker10").style.height = laval5height10;

///height width get form LOCAL
var laval5width10 = localStorage.getItem("laval5width10");
document.getElementById("laval5task10clicker10").style.widths = laval5width10;

//get compleat massage form local storage.
var compleatMassGet = localStorage.getItem("laval5task10clicker10");
document.getElementById("laval5task10clicker10").innerHTML = compleatMassGet;

//laval 5 compleat
document.getElementById("laval5Compleat").innerHTML =
  "(" + compleatMassGet + ")";
//display compleat massage
var GetMassage = localStorage.getItem("laval5Compleat");
document.getElementById("laval5Compleat").style.display = GetMassage;
////////////////////////////////////

//for update points using below code
var getValue = JSON.parse(localStorage.getItem("money"));
document.getElementById("money").value = getValue + "" + "Points";

function dataSend() {
  localStorage.clear("money");
}
function playBgMusic() {
  var playMusic = document.getElementById("bgMusicSource");
  playMusic.paused ? playMusic.play() : playMusic.pause();
  var musicArea = document.getElementById("musicArea");
  musicArea.classList.toggle("musicBg");
}
//footer page closer
function footerPageCloser() {
  document.getElementById("footerMainPage").style.transform = "scale(0)";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
}
//about us page
function about() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("about").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML = "About US";
  document.getElementById("contentInFooterPage").innerHTML =
    "Hi, Money Maker made by indian for help people for income. you earn real money direct in your paytm. you can earn 500Rs a day form this site. Earning is really easy You have to just click according to how to use instructions and money will be come in your paytm under 1 working hour. believe me its really easy Try it ones you come again and again promise ";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
  document.querySelector("*").scrollTo(0, 1550);
}

//contact us page
function contact() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("contact").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML = "Contact US";
  document.getElementById("contentInFooterPage").innerHTML =
    "Hi, <br> my name is Manohar Anand I am owner of money maker. you have any types of problem related to this site  ask me on this gmail address: <p>MoneyMakerHelp@gmail.com</p>";
  document.getElementById("about").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
  document.querySelector("*").scrollTo(0, 1550);
}

//privacy policy  page
function pp() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("pp").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML = "Privacy Policy";
  document.getElementById("contentInFooterPage").innerHTML =
    "1.Your Data secure 100%.<br>2.Money Send under 3hours after Request.<br>3.Data used for sending Updates.<br>4.100Points = 1Rs.<br>5.Lowest withdraw Amount 500Points = 5Rs.";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
  document.querySelector("*").scrollTo(0, 1550);
}
//terms and conditions page
function tc() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("tc").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML = "Terms & Conditions";
  document.getElementById("contentInFooterPage").innerHTML =
    "1.If your point reach 500 then apply for payment.<br>2.Provided real name and email address.<br>3. Provide linked paytm Mobile number.<br>  4.If you Provided wrong Paytm number then I can't take your risk.<br>5.Don't Clear your browser Data.<br>6.Do work According to given tips in how to use section else i can't take risk for anything wrong.";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
  document.querySelector("*").scrollTo(0, 1550);
}
// how to use
function howToUse() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("footerMainPage").style.overflow = "hidden";
  document.getElementById("howToUse").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML = "How to use";
  document.getElementById("contentInFooterPage").innerHTML =
    "1.Click on Laval Area.<br>2.Click Task Area.<br>3.After Click Task Area Wait 10s.<br>  4.Back To Home.<br>5.Click Refresh button (most important)<br>6.Don't Click on next task before points increase.";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("sendPaytm").style.color = "";
  document.querySelector("*").scrollTo(0, 1250);
}
// how to send money in paytm
function sendPaytm() {
  document.getElementById("footerMainPage").style.transform = "scale(1)";
  document.getElementById("footerMainPage").style.overflow = "hidden";
  document.getElementById("sendPaytm").style.color = "white";
  document.getElementById("titleInFooterPage").innerHTML =
    "How to send money in paytm";
  document.getElementById("contentInFooterPage").innerHTML =
    "1.Click on top right corner .<br>2.Add details.<br> 3.If your point is 500 then show send money button otherwise button hide .<br> 4.After sending your details. Review your request<br>5.Send money under 1hour in your paytm account.";
  document.getElementById("about").style.color = "";
  document.getElementById("contact").style.color = "";
  document.getElementById("pp").style.color = "";
  document.getElementById("tc").style.color = "";
  document.getElementById("howToUse").style.color = "";
  document.querySelector("*").scrollTo(0, 1250);
}
// refresh button
function refreshBtnHider() {
  window.location = "MoneyMaker.html";
}

