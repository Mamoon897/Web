<?php
// Establish a database connection
$servername = "localhost"; // Replace with your server name
$username = "root";    // Replace with your MySQL username
$password = " ";    // Replace with your MySQL password
$dbname = "employees";      // Replace with your database name

$conn = new mysqli($servername, $username, $password , $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get values from the form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$position = $_POST['position'];

// Insert data into the database
$sql = "INSERT INTO employees (first_name, last_name, email, position)
        VALUES ('$first_name', '$last_name', '$email', '$position')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
