function getUserName(){
	$.ajax({
		url: "GetUserName",
		success: function (response) 
		{
			if(response == null)
				return;
			document.getElementById("userName").innerHTML ="Welcome!! <strong>"+ response + "</strong>";
		},
		dataType: "text",
		cache: false
	});
}