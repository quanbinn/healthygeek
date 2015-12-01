  Template.BMIForm.helpers({
    'personalBMIInfos': function () {
      var currentUserId = Meteor.userId();
      return BMIInfos.find(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
    }
  });

  Template.BMIForm.events({
    "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      var currentUserId = Meteor.userId();
      
      // Get value from form element
      var yourHeight = event.target.yourHeight.value;
      var yourWeight = event.target.yourWeight.value;

      var yourBMIFloatNum = yourWeight / ((yourHeight / 100) * (yourHeight / 100));// Calculate your BMI(kg/m2)
      var yourBMI = yourBMIFloatNum.toFixed(1);     // Calculate your BMI round(1)
      
      // render the BMI info filled
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

      if (currentUserId) {
          // Insert a task into the collection
          BMIInfos.insert({
            Height: yourHeight,
            Weight: yourWeight,
            BMI: yourBMI,
            createdAt: new Date(),
            createdBy: currentUserId
          });        
      }

 
      // Clear form
      event.target.yourHeight.value = "";
      event.target.yourWeight.value = "";
    },

/*
    'click .BIMinfoOutput': function () {
      var BIMInfoId = this._id;
      console.log(this);    //????   
      console.log(this.Height);    //????  
      Session.set('selectedBIMInfo', BIMInfoId);
      var selectedBIMInfo = Session.get('selectedBIMInfo');
    }
*/

  });