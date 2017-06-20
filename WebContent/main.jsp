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
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		
		<script>
		function go(){
		var myAuto = document.getElementById('audio');  
                    myAuto.play();}
		</script>
		
		<link rel="stylesheet" href="stylesheet.css">
	</head>
	<body>
		<script type="text/javascript">
		window.onload =function() 
		{
			var i = 4;
            var loadingID = setInterval(function()
			{
				if(i === 0) 
				{
                    document.getElementById("loading").innerHTML =
					'<div id="container">' +
						'<div id="blocker">' +
							'<div id="instructions">' +
								'<strong>Click to Start!</strong>' +
							'</div>' +
						'</div>'+
					'</div>';
					blocker = document.getElementById('blocker');
					clearInterval(loadingID);
				}
                document.getElementById("count").innerHTML = i--;
            },1000);
        };
        
      
		</script>
		
		<div id = "counter"></div>
		<div id='loading'>
			<div id="instructions">
				<span id="count">5</span>秒後遊戲開始
			</div>
		</div>
  
		<div id = "winContainer">
			<div id = "winCounter"></div>
		</div>


		
		<div id='gameBox'>
			<embed src="Music/gaming.mp3" height="0" width="0" />
		
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
		
		<div class="modal fade" id="myModal" role="dialog">
    		<div class="modal-dialog">
    
      <!-- Modal content-->
      		<div class="modal-content">
        
       	 		<div class="modal-body">
         	 		<p>遊戲結束，三秒後跳轉頁面!</p>
       			 </div>
        		
      		</div>
      
    	</div>
  	</div>
		
		
	
	</body>
</html>