Template.login.events({
	'submit form': function(){
		event.preventDefault();

		var email = event.target.email.value;
		var password = event.target.password.value;

		//error handling??? 
		Meteor.loginWithPassword(email, password);
	}
});