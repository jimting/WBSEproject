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
		            		if(response[i].roomPeople < 5)
		            		{
		            			document.getElementById("gameList").innerHTML += '<li class="list-group-item" onclick="EnterRoom('+response[i].roomNumber+')" >'+ response[i].roomName +' <span class="badge">'+ response[i].roomPeople +'</span></li>';
		            		}
		            		else
		            		{
		            			document.getElementById("gameList").innerHTML += '<li class="list-group-item" >'+ response[i].roomName +' <span class="badge">人數已滿</span></li>';
		            		}
		            	}
		            },
		        	dataType: "json",
		        	cache: false
		        	});
			}
			
			setInterval(ajaxFn,3000)