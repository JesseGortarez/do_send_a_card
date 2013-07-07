//CHECK RADIO BUTTONS
	$(function(){
		if(sessionStorage.choice === "Design 1"){
			$('input:radio[name="choice"][value="Design 1"]').prop('checked', true);
		}
		else if(sessionStorage.choice === "Design 2"){
			$('input:radio[name="choice"][value="Design 2"]').prop('checked', true);
		}
		else if(sessionStorage.choice === "Design 3"){
			$('input:radio[name="choice"][value="Design 3"]').prop('checked', true);
		}
		else if(sessionStorage.choice === "Design 4"){
			$('input:radio[name="choice"][value="Design 4"]').prop('checked', true);
		}
	});


	//WORD COUNT
	$(function(){
		$(".textarea1").NobleCount(".count1", {
			on_negative: 'go_red',
			max_chars: 1000
		});
	});

	//BACKGROUND OF TEXTAREA OPACITY	
	$(function(){
		$('textarea').focus(function(){
			$('textarea').css('background-color', 'rgba(255,255,255,.9)');	
		});
		$('textarea').blur(function(){
			$('textarea').css('background-color', 'rgba(255,255,255,.4)');	
		});
	});
	
		
	$(function(){
		$('.learn, .learn-button').click(function(){
			$('.explanation').toggle('slow');
		});
	});
	
	
	$(function(){
		$('.need-support').click(function(){
			$('.support').toggle('slow');
		});
	});
	
	


	$.fn.serializeObject = function(){
		var o = {};
		var a = this.serializeArray();
		$.each(a, function(){
			if(o[this.name] !== undefined){
				if(!o[this.name].push){
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || "");
				} else {
					o[this.name] = this.value || "";
				}
		});
		return o;
	};
	
	$(function(){
		window.onpopstate = function(){
			console.log("test");
			//$('meta[name="viewport"]').setAttribute('content', 'initial-scale = .3');
		}
	});