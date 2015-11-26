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