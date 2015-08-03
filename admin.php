<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';
 
sec_session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<title>WATW Admin Panel</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	</head>
	<body>

	<?php if (login_check($mysqli) == true) : ?>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">WATW Admin Panel</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#/">Home</a></li>
                    <li><a href="#adminQA">Questions and Answers</a></li>
                    <li><a href="#adminAnime">List Anime</a></li>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#stats">System Stats</a></li>
                </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span>Welcome <?php echo htmlentities($_SESSION['username']); ?></a></li>
        <li><a href="includes/logout.php"><span class="glyphicon glyphicon-log-in"></span> Logout </a></li>
      </ul>
            </div>
        </div>
    </nav>
    <?php else : ?>
            <p>
                <span class="error">You are not authorized to access this page.</span> Please <a href="login.php">login</a>.
            </p>
        <?php endif; ?>
	</body>
</html>