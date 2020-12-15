//hide windows of science 
function hideScience() {
    document.getElementById('science-info').style.display = "none";
}
// show science window 
function science() {
    document.getElementById('science-info').style.display = "block";
}
// show result...............
function showResult() {
    var yourMarks = document.myForm.yourMarksName.value;
    var totalMarks = document.myForm.totalMarksName.value;
    var hundred = 100;
    var result = yourMarks / totalMarks * hundred;
    document.getElementById('YP').innerHTML = "Your Percentage :" +result+ "%";
    return false;
}
