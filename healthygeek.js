HealthygeeksList = new Mongo.Collection('healthygeeks');

if (Meteor.isClient) {

  Template.body.events({
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

    // document.getElementById("yourBMIAssess").textContent = "";  

	if (yourBMI < 18.5) {										 	 // output your BMI description according to Hong Kong's BMI recommendation
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
      event.target.yourHeight.value = "";
      event.target.yourWeight.value = "";
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
