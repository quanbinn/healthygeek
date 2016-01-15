Router.route('/register');
Router.route('/login');
Router.route('/home');

Router.route('addfood', {
	template: 'foodInfoForm'
});

Router.route('initialfooddata', {
	template: 'initialFoodData'
});

Router.route('/', {
	template: 'home'
});

Router.route('/food/:_id', {
	template: 'eachFood',
	data: function() {
		var currentFood = this.params._id;
		return Foods.findOne({_id: currentFood});
	}
});