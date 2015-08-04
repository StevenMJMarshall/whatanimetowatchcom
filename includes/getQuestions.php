<?php
include_once 'psl-config.php';
    //open connection to mysql db
    $connection = mysqli_connect(HOST,USER,PASSWORD,DATABASE) or die("Error " . mysqli_error($connection));
    // Check connection
    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    //fetch table rows from mysql db
    $sql = "select * from Questions";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
    //create an array
    $emparray[] = array();
    while($row =mysqli_fetch_object($result))
    {
        $emparray[] = $row;
    };

    echo json_encode($emparray);
?>