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

    document.getElementById("yourBMIInfo").textContent = "你的BMI是 " + yourBMI +".";  

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
