Template.register.events({
	'submit form': function(){
		event.preventDefault();

		var email = event.target.email.value;
		var password = event.target.password.value;

		Accounts.createUser({
			email: email,
			password: password
		}, function(error) {
			if (error) {
				alert(error.reason);
			} else{
				Router.go('/');    // Redirected to the home page
			};
		});

		



	}
});