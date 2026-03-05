<?php

// Get form data
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$department = $_POST['department'];

// Validation
if(empty($firstname) || empty($lastname)){
    echo "Invalid input";
    exit();
}

// Extract first 4 letters
$firstPart = substr($firstname,0,4);
$lastPart = substr($lastname,0,4);

// Get current year
$year = date("Y");
$yearPart = substr($year,-2);

// Create email
$email = strtolower($department . "_" . $firstPart . $lastPart . $yearPart . "@jbu.edu");

?>

<!DOCTYPE html>
<html>
<head>
<title>Generated Email</title>
</head>

<body>

<h2>Student Admission Successful</h2>

<p>Your Official Student Email ID:</p>

<h3><?php echo $email; ?></h3>

</body>
</html>