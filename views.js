var CreateCard = Backbone.View.extend({
		el: '.page',
		render: function(){
			var template = _.template($('#create-card-template').html(), {});
			this.$el.html(template);
		},
		
		events: {
			'submit .create-card-form': 'saveCard', 
			'click input': 'updateBackground',
			'click .previewBtn': 'loadPreview'			
		},
		
		updateBackground: function(ev){
			var img = $(ev.currentTarget).val();
			if(img === "Design 1"){
				$('.message-div, .preview-card').css('background-image', 'url(img/pic.jpg)' );
				$('.message-div textarea').focus();
			}
			else if(img === "Design 2"){
				$('.message-div, .preview-card').css('background-image', 'url(img/sunflower.jpg)' );
				$('.message-div textarea').focus();
			}
			else if(img === "Design 3"){
				$('.message-div, .preview-card').css('background-image', 'url(img/pic2.jpg)' );
				$('.message-div textarea').focus();
			}
			else if(img === "Design 4") {
				$('.message-div, .preview-card').css('background-image', 'url(img/fabric_1.png)' );
				$('.message-div textarea').focus();
			}
		},
		
		loadPreview: function(){
			//NEED VALIDATION BEFORE PASSING TO PREVIEW PAGE
			var cardDetails = $('.create-card-form').serializeObject();
			if(cardDetails["choice"] && cardDetails["messageText"]){
				cardDetails["messageText"] = cardDetails["messageText"].replace(/</g, " ");
				var card = new Card();
				card.save(cardDetails,{
					success: function(card){
						var details = $('.create-card-form').serialize();
						sessionStorage.choice = (cardDetails["choice"]);
						sessionStorage.messageText = (cardDetails["messageText"]);
						sessionStorage.name = (cardDetails["name"]);
						sessionStorage.email = (cardDetails["email"]);
						router.navigate('preview', {trigger: true});
					}
			});
			return false;	
			}
			else if(!cardDetails["choice"]){
				alert("Please choose a design");
			}
			else if(!cardDetails["messageText"]){
				alert("Please add your message");
			}
		},
				
		saveCard: function(){
			var cardDetails = $('.create-card-form').serializeObject();
			if(cardDetails["choice"] && cardDetails["messageText"]){
				cardDetails["messageText"] = cardDetails["messageText"].replace(/</g, " ");
				var card = new Card();
				card.save(cardDetails,{
					success: function(card){
						var details = $('.create-card-form').serialize();
						sessionStorage.choice = (cardDetails["choice"]);
						sessionStorage.messageText = (cardDetails["messageText"]);
						sessionStorage.name = (cardDetails["name"]);
						sessionStorage.email = (cardDetails["email"]);
						$.ajax({
							type: "POST", 
							url: 'mail.php',
							data: details
						});
						$('.footer').hide();
						router.navigate('thankyou', {trigger: true});
					}
			});
			return false;	
			}
			else if(!cardDetails["choice"]){
				alert("Please choose a design");
			}
			else if(!cardDetails["messageText"]){
				alert("Please add your message");
			}
		}
	});
	
	
	//EDIT CARD VIEW
	var EditPage = Backbone.View.extend({
		el: '.page',
		render: function(){
			var template = _.template($('#edit-page-template').html(), {});
			this.$el.html(template);
		},
		
		events: {
			'submit': 'saveEditCard', 
			'click .previewEditBtn': 'loadEditPreview'			
		}, 
		
		loadEditPreview: function(){
			var cardDetails = $('.edit-card-form').serializeObject();
			//cardDetails["name"] = sessionStorage.name;
			if(cardDetails["choice"] && cardDetails["messageText"]){
				cardDetails["messageText"] = cardDetails["messageText"].replace(/</g, " ");
				var card = new Card();
				card.save(cardDetails,{
					success: function(card){
						sessionStorage.choice = (cardDetails["choice"]);
						sessionStorage.messageText = (cardDetails["messageText"]);
						sessionStorage.name = (cardDetails["name"]);
						sessionStorage.email = (cardDetails["email"]);
						console.log(sessionStorage);
						router.navigate('preview', {trigger: true});
					}
			});
			return false;	
			}
			else if(!cardDetails["choice"]){
				alert("Please choose a design");
			}
			else if(!cardDetails["messageText"]){
				alert("Please add your message");
			}
		},
		
		saveEditCard: function(ev){
			var cardDetails = $('.edit-card-form').serializeObject();
			if(cardDetails["choice"] && cardDetails["messageText"]){
				cardDetails["messageText"] = cardDetails["messageText"].replace(/</g, " ");
				var card = new Card();
				card.save(cardDetails,{
					success: function(card){
						var details = $('.edit-card-form').serialize();
						sessionStorage.choice = (cardDetails["choice"]);
						sessionStorage.messageText = (cardDetails["messageText"]);
						sessionStorage.name = (cardDetails["name"]);
						sessionStorage.email = (cardDetails["email"]);
						$.ajax({
							type: "POST", 
							url: 'mail.php',
							data: details
						});
						$('.footer').hide();
						router.navigate('thankyou', {trigger: true});
					}
			});
			return false;	
			}
			else if(!cardDetails["choice"]){
				alert("Please choose a design");
			}
			else if(!cardDetails["messageText"]){
				alert("Please add a message");
			}
		}, 
		
		
		updateTextarea: function(){
				$('textarea').focus(function(){
				$('textarea').css('background-color', 'rgba(255,255,255,.9)');	
				});
				$('textarea').blur(function(){
				$('textarea').css('background-color', 'rgba(255,255,255,.4)');	
				});
			},
		
		updateRadio: function(){
			if(sessionStorage.choice === "Design 1"){
			$('input:radio[name="choice"][value="Design 1"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 2"){
			$('input:radio[name="choice"][value="Design 2"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 3"){
			$('input:radio[name="choice"][value="Design 3"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 4"){
			$('input:radio[name="choice"][value="Design 4"]').attr('checked', true);
			}
		},
		
		newBackground: function(){
			if(sessionStorage.choice === "Design 1"){
			$('.message-div').css('background-image', 'url(img/pic.jpg)' );	
			}
		else if(sessionStorage.choice === "Design 2"){
			$('.message-div').css('background-image', 'url(img/sunflower.jpg)' );
			}
		else if(sessionStorage.choice === "Design 3"){
			$('.message-div').css('background-image', 'url(img/pic2.jpg)' );
			}
		else {
			$('.message-div').css('background-image', 'url(img/fabric_1.png)' );
			}
		}
	});
	
	
	
	var SubmitPage = Backbone.View.extend({
		el: '.page',
		render: function(){
			var template = _.template($('#submit-page-template').html(), {});
			this.$el.html(template);
		},
		
		newBackground: function(){
			if(sessionStorage.choice === "Design 1"){
			$('.preview-card').css('background-image', 'url(img/pic.jpg)' );	
			}
		else if(sessionStorage.choice === "Design 2"){
			$('.preview-card').css('background-image', 'url(img/sunflower.jpg)' );
			}
		else if(sessionStorage.choice === "Design 3"){
			$('.preview-card').css('background-image', 'url(img/pic2.jpg)' );
			}
		else {
			$('.preview-card').css('background-image', 'url(img/fabric_1.png)' );
			}
		}
	});
	
	
	var PreviewPage = Backbone.View.extend({
		el: '.page',
		render: function(){
			var template = _.template($('#preview-page-template').html(), {});
			this.$el.html(template);
		},
		
		events: {
			'click .submit': 'saveCard', 
			'click .editBtn': 'loadEditPage'			
		}, 
		
		
		saveCard: function(){
			var cardDetails = sessionStorage;
			var card = new Card();
			card.save(cardDetails, {
				success: function(card){
					$.ajax({
						type: "POST", 
						url: "mail.php", 
						data: cardDetails
					});
					$('.footer').hide();
					router.navigate('thankyou', {trigger: true});
				}
			});
			return false;
		},	
		
			
		loadEditPage: function(){
			var cardDetails = sessionStorage;
			var card = new Card();
			card.save(cardDetails, {
				success: function(card){
					//sessionStorage = cardDetails;
					router.navigate('edit', {trigger: true});
				}
			});
		},
		
		updateRadio: function(){
			if(sessionStorage.choice === "Design 1"){
			$('input:radio[name="choice"][value="Design 1"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 2"){
			$('input:radio[name="choice"][value="Design 2"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 3"){
			$('input:radio[name="choice"][value="Design 3"]').attr('checked', true);
			}
			else if(sessionStorage.choice === "Design 4"){
			$('input:radio[name="choice"][value="Design 4"]').attr('checked', true);
			}
		},
		
		newBackground: function(){
			if(sessionStorage.choice === "Design 1"){
			$('.preview-page-card').css('background-image', 'url(img/pic.jpg)' );	
			}
		else if(sessionStorage.choice === "Design 2"){
			$('.preview-page-card').css('background-image', 'url(img/sunflower.jpg)' );
			}
		else if(sessionStorage.choice === "Design 3"){
			$('.preview-page-card').css('background-image', 'url(img/pic2.jpg)' );
			}
		else {
			$('.preview-page-card').css('background-image', 'url(img/fabric_1.png)' );
			}
		}
		
	});