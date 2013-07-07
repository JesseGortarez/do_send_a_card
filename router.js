var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			"thankyou": "thankyou",
			"preview": "preview",
			"edit": "edit"
		}
	});
	
	var router = new Router();
	var createCard = new CreateCard();
	var submitPage = new SubmitPage();
	var previewPage = new PreviewPage();
	var editPage = new EditPage();
	
	
	router.on('route:home', function(){
		createCard.render();
	});
	
	router.on('route:thankyou', function(){
		submitPage.render();
		submitPage.newBackground();
	});
	
	router.on('route:preview', function(){
		previewPage.render();
		previewPage.newBackground();
	});
	
	router.on('route:edit', function(){
		editPage.render();
		editPage.updateRadio();
		editPage.newBackground();
		editPage.updateTextarea();
	});
	
	Backbone.history.start({pushState: true});