
		$(document).ready(function(){
			$("#search").keypress(function(){
				var x=document.getElementById("search").value;
			
			if(x == ""){
				$("#search_output").hide();
						}
			else{
				$("#search_output").show();
				document.getElementById("search_output").innerHTML="no match found...";
			}			
						
			});
		
		});
			$(document).ready(function(){
				$("#bus_1").click(function(){
					$(".bus").text("Bus 1");
					$(".navigator").animate({
					left:370,
					width:110,
					top:55
					
					});

				});
				
				$("#bus_2").click(function(){
					$(".bus").text("Bus 2");
					$(".navigator").animate({
					left:370,
					width:110,
					top:55
					});
				});
				
					$("#bus_3").click(function(){
					$(".bus").text("Bus 3");
					$(".navigator").animate({
					left:370,
					width:110,
					top:55
					});
				});
			
				$("#record").click(function(){
					$(".navigator").animate({
					left: 525,
					width:110,
					top:55
					});
				});
			});
			$(document).ready(function(){
			$("#log_out").mouseenter(function(){
				$(this).css({"width":"70px","height":"70px","background-size":"40px 40px"});
			});
			
			$("#log_out").mouseleave(function(){
				$(this).css({"width":"25px","height":"28px","background-size":"25px 27px"});
			});
			});
			$(document).ready(function(){
			$("#register").click(function(){
				$(this).animate({top:15});
				$("#back").animate({top:0});
				$("#registration_form").animate({top:16});
				$("#registration_form").show();
				$("#back").show();		
			});
			
			$("#back").click(function(){
				$("#register").animate({top:4});
				$(this).animate({top:500});
				$(this).hide();
				$("#registration_form").animate({top:0});
				$("#registration_form").hide();
			});
			
			$(".left").click(function(){
				$(".bus_note").animate({
					left:1086
				});
				$(".bus_note_title").animate({
					left:1098
				});
				$(".right").animate({
					left:1093
				});
			});
			
			$(".right").click(function(){
				$(".bus_note").animate({
					left:1360
				});
				$(".bus_note_title").animate({
					left:1373	
				});
				$(this).animate({
					left:1370
				});
				
			});
				
			$("#change_path").click(function(){
				$(".navigator").animate({
				left: 675,
				width:110,
				top:55
				});
			});
			$("#unscheduled").click(function(){
				$(".navigator").animate({
				left: 675,
				width:110,
				top:55				
				});
				$("#violation").css("font-color","red");
				
			});
			$("#register").mouseenter(function(){
				$(".register_info").fadeIn(200);
			});
			$("#register").mouseleave(function(){
				$(".register_info").fadeOut(200);
				
			});
			
			$(".left").mouseenter(function(){
				$(".note_info").fadeIn(200);
			});
			$(".left").mouseleave(function(){
				$(".note_info").fadeOut(200);
				
			});
		
		
			$(".search_button").mousedown(function(){
				$(this).animate({
					width:64,
					left:252,
					height:26,
					top:1
				},"fast");

			
			});
			$(".search_button").mouseup(function(){
				$(this).animate({
					width:65,
					left:250,
					height:27,
					top:0
				},"fast");
				$(this).css("padding-left","2px");
			
			});
			
			$(".button_note").mousedown(function(){
				$(this).animate({
					width:64,
					left:107,
					height:25,
					top:276
				},"fast");

			
			});
			$(".button_note").mousedown(function(){
				$(this).animate({
					width:65,
					left:105,
					height:27,
					top:275
				},"fast");

			
			});
		
			
			
			
		});
	
		function log_out(){
			if(confirm("STOP THE OPERATION!")==true){
				return true;
			}
			else{
				return false;
			}
			
		}