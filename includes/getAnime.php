<?php
    //open connection to mysql db
    $connection = mysqli_connect("attf.us","attf","zKinXN2RBG","attf_watw") or die("Error " . mysqli_error($connection));
?>
<?php
    //fetch table rows from mysql db
    $sql = "select * from Animes";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
?>
<?php
    //create an array
    $emparray[] = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
?>
<?php 
    echo json_encode($emparray);
?>