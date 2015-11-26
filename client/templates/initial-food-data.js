Template.initialFoodData.events({
	'click .initialFoodData': function(event) {
		event.preventDefault();

	Foods.insert({
		name: '瘦牛肉',
		unit: 100,
		calory: 183,
		totalFat: 8.46,
		saturatedFat: 3.422,
		cholesterol: 83,
		category: '天然食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/4005?fg=Beef+Products&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=beef',
		imageSource: 'image/food/beef.jpg'
	});

	Foods.insert({
		name: '鸡蛋',
		unit: 44,
		calory: 63,
		totalFat: 4.18,
		saturatedFat: 1.375,
		cholesterol: 164,
		category: '天然食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/112?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=egg',
		imageSource: 'image/food/egg.jpg'
	});
	Foods.insert({
		name: '韭菜包',
		brand: "味全",
		unit: 150,
		calory: 400,
		totalFat: 24,
		saturatedFat: 6,
		cholesterol: 0,
		category: '加工食品',
		imageSource: 'image/food/jiucai-bao.jpg'
	});
	Foods.insert({
		name: '湖南腊肉',
		brand: "新东阳食品",
		unit: 84,
		calory: 340,
		totalFat: 25,
		saturatedFat: 8,
		cholesterol: 95,
		category: '加工食品',
		imageSource: 'image/food/larou.jpg'
	});
	Foods.insert({
		name: '脱脂牛奶',
		unit: 100,
		calory: 35,
		totalFat: 0.18,
		saturatedFat: 0.117,
		cholesterol: 2,
		category: '加工食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/8457?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=milk+fat+free',
		imageSource: 'image/food/nonfat-milk.jpg'
	});
	Foods.insert({
		name: '花生',
		unit: 100,
		calory: 567,
		totalFat: 49.24,
		saturatedFat: 6.279,
		cholesterol: 0,
		category: '加工食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/4800?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=peanut',
		imageSource: 'image/food/peanut.jpg'
	});
	Foods.insert({
		name: '12英寸的奶酪比萨',
		brand: "必胜客",
		unit: 100,
		calory: 280,
		totalFat: 12.56,
		saturatedFat: 5.184,
		cholesterol: 21,
		category: '加工食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/6775?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=pizza',
		imageSource: 'image/food/pizza.jpg'
	});
	Foods.insert({
		name: '金枪鱼三明治-含有生菜和西红柿的白面包',
		brand: "赛百味",
		unit: '12inch',
		calory: 1048,
		totalFat: 57.07,
		saturatedFat: 10.39,
		cholesterol: 133,
		category: '加工食品',
		resource: 'http://ndb.nal.usda.gov/ndb/foods/show/6729?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=subway',
		imageSource: 'image/food/tuna-12inch-subway.jpg'
	});

	Router.go('home');

	}
});