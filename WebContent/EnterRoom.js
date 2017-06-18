//we store out timerIdhere
			//we define our function and STORE it in a var
			function EnterRoom(roomID) {
		        $.ajax({
		            url: "EnterRoom",
		            data:
		            {
		            	roomID:roomID
		            },
		            success: function (response) 
		            {
		            	if(response == null)
		            		return;
		            	document.location.href="room.html?roomID="+roomID;
		            },
		        	cache: false
		        	});
			}
				