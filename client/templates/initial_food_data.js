Template.initialFoodData.events({
	'click .initialFoodData': function(event) {
		event.preventDefault();

		var user = Meteor.user();
		var email = user && user.emails && user.emails[0].address
		if (email === "quanbinn@126.com") {
			Meteor.call("setInitialFoods");   	
		}; 		

	Router.go('home');

	}
});