<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Welcome!</title>
</head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src = "AutoRefreshRoom.js"></script>
<script>
	ajaxFn();
</script>
<body style = "background-color:yellow">
	<center><img src = "images/title.jpg">
	<div style = "overflow: scroll;width: 480px;height: 640px;border-style:double" id = "gameList">
	</div>
	<div>
		<form action = "ConstructRoom"><button style = "margin-left:10px " type="submit"><img src = "images/enter.jpg"></button></form>
		<form action = "Leave"><button  type="submit"><img src = "images/leave.jpg"></button></form>
	</div>
	</center>
	
</body>
</html>