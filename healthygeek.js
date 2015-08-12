HealthygeeksList = new Mongo.Collection('healthygeeks');
FoodsList = new Mongo.Collection('foods');

if (Meteor.isClient) {
  Template.addBIMForm.events({
    "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var yourHeight = event.target.yourHeight.value;
      var yourWeight = event.target.yourWeight.value;

      var yourBMIFloatNum = yourWeight / ((yourHeight / 100) * (yourHeight / 100));// Calculate your BMI(kg/m2)
      var yourBMI = yourBMIFloatNum.toFixed(1);     // Calculate your BMI round(1)
      
      document.getElementById("yourHeightInfo").textContent = "你的身高是 " + yourHeight +".";  
      document.getElementById("yourWeightInfo").textContent = "你的体重是 " + yourWeight +".";  
      document.getElementById("yourBMIInfo").textContent = "你的BMI是 " + yourBMI +".";  

      // output your BMI description according to Hong Kong's BMI recommendation
	if (yourBMI < 18.5) {									
    	document.getElementById("yourBMIAssess").textContent = "你的体重过轻"; 
	}else if (yourBMI >= 18.5 && yourBMI < 23.0) {
	    document.getElementById("yourBMIAssess").textContent = "你的体重正常"; 
	}else if (yourBMI >= 23.0 && yourBMI < 25.0) {
	    document.getElementById("yourBMIAssess").textContent = "你的体重超重，有健康危险"; 
	}else if (yourBMI >= 25.0 && yourBMI < 30.0) {
	    document.getElementById("yourBMIAssess").textContent = "你的体重超重，属于中度肥胖"; 
	}else{
	    document.getElementById("yourBMIAssess").textContent = "你的体重超重，属于严重肥胖"; 
	};

      // Insert a task into the collection
      HealthygeeksList.insert({
        Height: yourHeight,
        Weight: yourWeight,
        BMI: yourBMI
      });
 
      // Clear form
      // event.target.yourHeight.value = "";
      // event.target.yourWeight.value = "";
    }
  });

  Template.addFoodForm.events({
    "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var foodName = event.target.foodName.value;
      var unit = event.target.unit.value;
      var calory = event.target.calory.value;
      var totalFat = event.target.totalFat.value;
      var saturatedFat = event.target.saturatedFat.value;
      var transFat = event.target.transFat.value;
      var cholesterol = event.target.cholesterol.value;
      var sodium = event.target.sodium.value;
      var category = event.target.category.value;
      var resource = event.target.resource.value;    

      // Insert a task into the collection
      FoodsList.insert({
        foodName: foodName,
        unit: unit,
        calory: calory,
        totalFat: totalFat,
        saturatedFat: saturatedFat,
        transFat: transFat,
        cholesterol: cholesterol,
        sodium: sodium,
        category: category,
        resource: resource
      });
 
      // Clear form
      event.target.foodName.value = "";
      event.target.unit.value = "";
      event.target.calory.value = "";
      event.target.totalFat.value = "";
      event.target.saturatedFat.value = "";
      event.target.transFat.value = "";
      event.target.cholesterol.value = "";
      event.target.sodium.value = "";
      event.target.category.value = "";
      event.target.resource.value = "";
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
