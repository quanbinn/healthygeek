  Template.BMIForm.helpers({
    'personalBMIInfos': function () {
      var currentUserId = Meteor.userId();
      return BMIInfos.findOne(
        {}, 
        {sort: {createdAt: -1}}
      );
    },

    'isUnderweight': function () {
      var currentUserId = Meteor.userId();
      var currentUserBMIInfo =  BMIInfos.findOne(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
      if (currentUserBMIInfo.BMI < 18.5) {
        return true;
      };
    },

    'isInNormalRange': function () {
      var currentUserId = Meteor.userId();
      var currentUserBMIInfo =  BMIInfos.findOne(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
      if (currentUserBMIInfo.BMI >= 18.5 && currentUserBMIInfo.BMI < 23.0) {
        return true;
      };
    },

    'isOverweightAtRisk': function () {
      var currentUserId = Meteor.userId();
      var currentUserBMIInfo =  BMIInfos.findOne(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
      if (currentUserBMIInfo.BMI >= 23.0 && currentUserBMIInfo.BMI < 25.0) {
        return true;
      };
    },

    'isOverweightModeratelyObese': function () {
      var currentUserId = Meteor.userId();
      var currentUserBMIInfo =  BMIInfos.findOne(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
      if (currentUserBMIInfo.BMI >= 25.0 && currentUserBMIInfo.BMI < 30.0) {
        return true;
      };
    },

    //this funciton is not going to be used
    'isOverweightSeverelyObese': function () {
      var currentUserId = Meteor.userId();
      var currentUserBMIInfo =  BMIInfos.findOne(
        {createdBy: currentUserId}, 
        {sort: {createdAt: -1}}
      );
      if (currentUserBMIInfo.BMI >= 30.0) {
        return true;
      };
    }

  });

  Template.BMIForm.events({
    "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      
      // Get value from form element
      var myHeight = event.target.myHeight.value;
      var myWeight = event.target.myWeight.value;

      var myBMIFloatNum = myWeight / ((myHeight / 100) * (myHeight / 100));// Calculate my BMI(kg/m2)
      var myBMI = myBMIFloatNum.toFixed(1);     // Calculate my BMI round(1)
      
      // render the BMI info filled
      document.getElementById("myHeightInfo").textContent = "我的身高是 " + myHeight +".";  
      document.getElementById("myWeightInfo").textContent = "我的体重是 " + myWeight +".";  
      document.getElementById("myBMIInfo").textContent = "我的BMI是 " + myBMI +".";  

      // output my BMI description according to Hong Kong's BMI recommendation
    	if (myBMI < 18.5) {									
        	document.getElementById("myBMIAssess").textContent = "我的体重过轻"; 
      }else if (myBMI >= 18.5 && myBMI < 23.0) {
    	    document.getElementById("myBMIAssess").textContent = "我的体重正常"; 
    	}else if (myBMI >= 23.0 && myBMI < 25.0) {
    	    document.getElementById("myBMIAssess").textContent = "我的体重超重，有健康危险"; 
    	}else if (myBMI >= 25.0 && myBMI < 30.0) {
    	    document.getElementById("myBMIAssess").textContent = "我的体重超重，属于中度肥胖"; 
    	}else{
    	    document.getElementById("myBMIAssess").textContent = "我的体重超重，属于严重肥胖"; 
    	};

      if (Meteor.userId()) {
          Meteor.call('insertBMIInfosData', myHeight, myWeight, myBMI);   
      };

      // Clear form
      event.target.myHeight.value = "";
      event.target.myWeight.value = "";
    },

  });