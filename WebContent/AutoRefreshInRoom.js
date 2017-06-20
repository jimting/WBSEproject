//we store out timerIdhere
			//we define our function and STORE it in a var
			function ajaxFn() {
				
				var url = window.location.toString(); //取得當前網址
			    var str = ""; //參數中等號左邊的值
			    var roomID = ""; //參數中等號右邊的值
			    if (url.indexOf("?") != -1) {
			        //如果網址有"?"符號
			        var ary = url.split("?")[1].split("&");
			        //取得"?"右邊網址後利用"&"分割字串存入ary陣列 ["a=1","b=2","c=3"]
			        for (var i in ary) {
			            //取得陣列長度去跑迴圈，如:網址有三個參數，則會跑三次
			            str = ary[i].split("=")[0];
			            //取得參數"="左邊的值存入str變數中
			            if (str == "roomID") {
			                //若str等於想要抓取參數 如:b
			                roomID = decodeURI(ary[i].split("=")[1]); //抓msg
			                //取得b等號右邊的值並經過中文轉碼後存入str_value
			            }
			        }
			    }
			    
		        $.ajax({
		            url: "AutoRefreshInRoom",
		            data:
		            {
		            	roomID:roomID
		            },
		            success: function (response) 
		            {
		            	//列出所有房間夥伴，與更新對話視窗
		            	document.getElementById("userData").innerHTML = "";
		            	document.getElementById("chattingContext").innerHTML = "";
		            	for(var i = 0;i < response.Players.length;i++)
		            	{
		            		//確認是否是室長
		            		if(response.Players[i].leader)
		            		{
		            			document.getElementById("userData").innerHTML += "<div class='userName' id='roomText'>" + response.Players[i].userName + " - 室長</div>";
		            		}
		            		else
		            		{
		            			document.getElementById("userData").innerHTML += "<div class='userName' id='roomText'>" + response.Players[i].userName + "</div>";
		            		}
		            	}
		            	
		            	//呈現全部聊天內容
		            	for(var i = 0;i < response.chat.length;i++)
		            	{
		            		document.getElementById("chattingContext").innerHTML += "<p id='roomText' style='font-size:24px;'>" + response.chat[i] + "</p>";
		            	}
		            	document.getElementById("chattingContext").innerHTML += "<div id='bottom'></div>";
		            	var element = document.getElementById("chattingContext");
		            	element.scrollTop = element.scrollHeight;
		            	
		            	//check人數與室長
		            	var checkLeader = CheckLeader();
		            	if((checkLeader) && (response.Players.length == 5))
		            	{
		            		document.getElementById("startButtonArea").innerHTML = '<a href="main.jsp" class="myButton" style="float:left;">開始遊戲</a>'
		            	}
		            },
		        	dataType: "json",
		        	cache: false
		        	});
			}
			
			setInterval(ajaxFn,3000)