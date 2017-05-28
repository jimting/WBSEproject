//we store out timerIdhere
			//we define our function and STORE it in a var
			function ajaxFn() {
		        $.ajax({
		            url: "AutoRefreshRoom",
		            success: function (response) 
		            {
		            	if(response == null)
		            		return;
		            	document.getElementById("gameList").innerHTML = "";
		            	for(i=0;i<response.length;i++)
		            	{
		            		document.getElementById("gameList").innerHTML += "" + response[i].roomName + "<br>";
		            	}
		            },
		        	dataType: "json",
		        	cache: false
		        	});
			}
			
			setInterval(ajaxFn,3000)