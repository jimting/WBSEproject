<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page import="maze.game.Game"%>
<%@ page import="maze.animal.*"%>

<html>
	<head>
		<meta context = "text/html; charest=utf-8">
		<title> 
			three.js_test
		</title>
		
		<script src="build/three.js"></script>
		<script src="build/three.min.js"></script>
		<script src="js/Detector.js"></script>
		<script src="js/libs/stats.min.js"></script>
		<script src="js/controls/OrbitControls.js"></script>
		<script src="js/libs/dat.gui.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		<script src="maze/PointerLockControl.js"></script>
		<script src="maze/Map.js"></script>
		<script src="maze/People.js"></script>
		<script src="maze/Ghost.js"></script>
		<script src="maze/FirstGhost.js"></script>
		<script src="maze/FirstPeople.js"></script>
		<script src="maze/main.js"></script>
		<script src="maze/mainGhost.js"></script>
		
		
		
		<link rel="stylesheet" href="stylesheet.css">
	</head>
	<body>
		<div id='container'>
			<div id="blocker">
		    <div id="instructions">
		    	<strong>Click to Start!</strong>
		    </div>
		</div>

		</div>
		<div id='gameBox'>
			
			<script type="text/javascript">
				var	playerNum = '${playerNum}';
				var gameNum = '${gameNum}';
				var mx = '${gameList[gameNum].playerList[playerNum].position.x}';
				var mz = '${gameList[gameNum].playerList[playerNum].position.z}';
				if(playerNum == 4)
					var g = mainGhost(playerNum,mx,mz);
				else
					var m = main(playerNum,mx,mz);
				
			</script>	
		</div>
		
		
	
	</body>
</html>