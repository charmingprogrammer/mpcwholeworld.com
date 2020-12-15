<?php

$viewerName = $_POST["viewerName"];
$viewerEmail = $_POST["viewerEmail"];
$viewerMassages = $_POST["viewerMassages"];


//check connection

$conn = new mysqli("127.0.0.2","mpcwhole_manohar","anand","mpcwhole_manohar");
if($conn->connect_error){
    die('connection denied : '.$conn->connect_error);

}else{
    $sql = "INSERT INTO mpc_whole_world_database_data(viewerName,viewerEmail,viewerMassages) VALUES ('$viewerName', '$viewerEmail','$viewerMassages')";
if(mysqli_query($conn, $sql)){
//alert massages.........
    $message = "Thank you for you Feedback.";
echo "<script type='text/javascript'>alert('$message');</script>";

} else{
    echo "ERROR:failed $sql. " . mysqli_error($conn);
}
    $conn->close();
}












?>