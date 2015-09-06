 function validation(){
	 var x=document.forms["form_1"]["key"].value;
	 
	 if(x != "register"){
		document.getElementById("validate").innerHTML="( Invalid Key )";
		return false;
	 }
	 else{
	 document.getElementById("validate").innerHTML="";
	 }
	 
	 }

	 $(document).ready(function(){
		$("#plus_1").click(function(){
			$("#kid").css("height","80");
			$(this).hide();
			$(".num_kids_1").slideDown(200);
			$("#plus_2").show().click(function(){
				$(this).hide();
				$("#kid").css("height","120");
				$(".num_kids_2").slideDown(200);
				$("#plus_3").show().click(function(){
					$(".num_kids_3").slideDown(200);
					$(this).hide();
					$("#kid").css("height","160");
				
				});
					
				
			
			});
		
		});
	 
	 });
	