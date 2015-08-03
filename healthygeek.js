HealthygeeksList = new Mongo.Collection('healthygeeks');

if (Meteor.isClient) {
  //Template.body.events
  // Step 1: Find the element we want the event on
  var button = document.getElementById("computeYourBMI");

  // Step 2: Define the event listener function  
  var onButtonClick = function() {
    var yourHeight = document.getElementById("yourHeight").value;
    var yourWeight = document.getElementById("yourWeight").value;
	var yourBMIFloatNum = yourWeight / ((yourHeight / 100) * (yourHeight / 100));// Calculate your BMI(kg/m2)
	var yourBMI = yourBMIFloatNum.toFixed(1);     // Calculate your BMI round(1)

    document.getElementById("yourBMIInfo").textContent = yourBMI;  
  };
  
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
