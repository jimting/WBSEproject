var req;

function getPlayerNum(){
	$.ajax({ 
			url: "count",
			type: "GET",
			success: function(Jdata)
			{
				document.getElementById("show").innerHTML = "Now we have " + Jdata + " players!";
			},
			error: function()
			{
				alert("something wrong!");
			},
			dataType: "json",
			cache: false
			});
}
