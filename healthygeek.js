if (Meteor.isClient) {
  // Step 1: Find the element we want the event on
  var button = document.getElementById("computeYourBMI");

  // Step 2: Define the event listener function  
  var onButtonClick = function() {
    var yourHeight = document.getElementById("yourHeight").value;
    var yourWeight = document.getElementById("yourWeight").value;
	var yourBMIFloatNum = yourWeight / ((yourHeight / 100) * (yourHeight / 100));// Calculate your BMI(kg/m2)
	var yourBMI = yourBMIFloatNum.toFixed(1);     // Calculate your BMI round(1)

	if (yourBMI < 18.5) {										 	 // output your BMI description according to Hong Kong's BMI recommendation
    	alert("You are underweight");
	}else if (yourBMI >= 18.5 && yourBMI < 23.0) {
	    alert("You are in normal Range");
	}else if (yourBMI >= 23.0 && yourBMI < 25.0) {
	    alert("You are overweight - at risk");
	}else if (yourBMI >= 25.0 && yourBMI < 30.0) {
		alert("You are overweight - moderately obese");
	}else{
		alert("You are overweight - severely obese");
	};

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
