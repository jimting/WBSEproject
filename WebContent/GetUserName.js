function getUserName(){
	$.ajax({
		url: "GetUserName",
		success: function (response) 
		{
			if(response == null)
				return;
			document.getElementById("userName").innerHTML ="<strong>"+ response + "</strong>你好";
		},
		dataType: "text",
		cache: false
	});
}