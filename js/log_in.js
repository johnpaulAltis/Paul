	function validation(){
		var x = document.getElementById("username").value,
			y = document.getElementById("password").value;
	
			if((y != "track")&&(x != "lorma")){
				$("#password").val("");
				$("#username").val("");
				document.getElementById("valid_ouptut_1").innerHTML="Account do not exist";
				document.getElementById("valid_ouptut_2").innerHTML="";
				return false;	
			}
			else if((y == "track")&&(x != "lorma")){
				$("#password").val("");
				$("#username").val("");
				document.getElementById("valid_ouptut_1").innerHTML="";
				document.getElementById("valid_ouptut_2").innerHTML="Check you Username/password";
				return false;	
			}
			else if((y!= "track")&&(x == "lorma")){
				$("#password").val("");
				$("#username").val("");
				document.getElementById("valid_ouptut_1").innerHTML="";
				document.getElementById("valid_ouptut_2").innerHTML="Check you Username/password";
				return false;	
			}
			
			if((y == "track")&&(x == "lorma")){
				window.alert("SUCCESS");
			}
	}
	
	$(document).ready(function(){
	$("button").mouseenter(function(){
		$("button").animate({
		left: '13px',
		width: '300px'
		});

		$(".badge_pic").animate({
			top:101
		});
		$(".badge_pic").slideDown(100);
		$("button").css("border","3px solid #980000");
	
		
		$("#border").css("border","6px solid #980000");
		$(".background").animate({
		width: '800px',
		height: '700px',
		left: '296px',
		top: '2px',
		});
		
		
		$("#in_span").text("LOGIN");
		$("#admin").css({"background-image":"url(./pictures/head_pic.png)","color":"white"});
		$("#username").fadeIn(400);
		$("#password").fadeIn(400);
		$("#welcome_note").fadeOut(200);
		$("h3").text("ADMIN");
		
});

});