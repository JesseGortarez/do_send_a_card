var Cards = Backbone.Collection.extend({
		url: '/collections/cards.json'
	});
	
	
var Card = Backbone.Model.extend({
		urlRoot: '/collections/cards.json'
	});
