Template.register.events({
	'submit form': function(){
		event.preventDefault();

		var email = event.target.email.value;
		var password = event.target.password.value;
		Accounts.createUser({
			email: email,
			password: password
		});

		// Clear form
 	    event.target.email.value = "";
  	    event.target.password.value = "";
	}
});