<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "nhatrang_population";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
mysqli_set_charset($conn, 'UTF8');
mysqli_query($conn, "SET NAMES 'UTF8'");
// $result = mysqli_query($conn, "SELECT * From population");

//Truy vấn id
$featureId = $_POST['featureId'];
$featureIdQuery = "SELECT population_col FROM population WHERE'" . $featureId ."'=population.id";
$result = mysqli_query($conn, $featureIdQuery);
$featurePopulation;
while($row = mysqli_fetch_assoc($result)) {
    $featurePopulation = $row['population_col']; 
}

echo $featurePopulation;
$conn->close();
// echo $featureId;



//Thử nghiệm các truy xuất dữ liệu của mảng trong PHP
// echo $featureArray;
// echo var_dump($featureArray);
// echo key((array)$featureArray2[2]);
// echo array_keys($featureArray2[0]);
// echo $featureArray2[0]->featureId;
// echo array_keys(get_object_vars($featureArray2[0]));
// echo $_POST['featureArray'][100]["featureId"];


// Tạo dữ liệu polation
// $valuesInsert = "";
// foreach ($featureArray as $item) {
//     $valuesInsert .= "('" . $item["featureId"] . "'," . $item["population"] . ")," ;
// }
// $insertQuery = "INSERT INTO population VALUES " . $valuesInsert;
// $insertQuery = rtrim($insertQuery,",");
// mysqli_query($conn, $insertQuery);
// echo "success";
// echo $insertQuery;
