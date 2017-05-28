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
		<script src="maze/PointerLockControl.js"></script>
		<script src="maze/Map.js"></script>
		<script src="maze/People.js"></script>
		<script src="maze/FirstPeople.js"></script>
		
		
		
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
			<script src="maze/main.js"></script>
			<script>
				firstPeople.translateX('${game.playerList[playerNum-1].position.x}');
				firstPeople.translateZ('${game.playerList[playerNum-1].position.z}');
			</script>	
		</div>
		
		
	
	</body>
</html>