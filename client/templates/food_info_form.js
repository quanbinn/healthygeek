  Template.foodInfoForm.helpers({
    'isBinxia': function(){
      var user = Meteor.user();
      var email = user && user.emails && user.emails[0].address
      return email === "quanbinn@126.com"
    },

    'FoodInfos': function () {
      return Foods.find();
    },
  });

  Template.foodInfoForm.events({
    "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
      var brand = event.target.brand.value;      
      var unit = event.target.unit.value;
      var calory = event.target.calory.value;
      var totalFat = event.target.totalFat.value;
      var saturatedFat = event.target.saturatedFat.value;
      var cholesterol = event.target.cholesterol.value;
      var category = event.target.category.value;
      var imageSource = event.target.imageSource.value;
      var resource = event.target.resource.value;  

      var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
      var totalFatPercentDV = (totalFat * 100  / 65).toFixed(0);           // get total fat's %DV
      var saturatedFatPercentDV = (saturatedFat * 100  / 20).toFixed(0);   // get saturated fat's %DV
      var cholesterolPercentDV = (cholesterol * 100  / 300).toFixed(0);    // get cholesterol's %DV

      // get the quotient of totalFat's %DV / calories's %DV 
      var totalFatPercentDVQuotient = (totalFatPercentDV / caloryPercentDV).toFixed(1);  
      // get the quotient of saturatedFat's %DV / calories's %DV
      var saturatedFatPercentDVQuotient = (saturatedFatPercentDV / caloryPercentDV).toFixed(1);
      // get the quotient of cholesterol's %DV / calories's %DV  
      var cholesterolPercentDVQuotient = (cholesterolPercentDV / caloryPercentDV).toFixed(1);

      // render the food info filled 
      document.getElementById("foodName").textContent = "食品名称: " + name;  
      document.getElementById("foodBrand").textContent = "品牌: " + brand;  
      document.getElementById("foodUnit").textContent = "单位: " + unit +"克";  
      document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
      document.getElementById("foodTotalFat").textContent = "总脂肪: " + totalFat +"克";  
      document.getElementById("foodSaturatedFat").textContent = "饱和脂肪: " + saturatedFat +"克";  
      document.getElementById("foodCholesterol").textContent = "胆固醇: " + cholesterol +"毫克";  
      document.getElementById("foodCategory").textContent = "分类: " + category;  
      document.getElementById("foodImageSource").textContent = "图片路径： "+ imageSource;        
      document.getElementById("foodResource").textContent = "来源: " + resource;  

      document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
      document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV +"%";  
      document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%";  
      document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV +"%";  

      document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient;  
      document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient ;  
      document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient;  

      var user = Meteor.user();
      var email = user && user.emails && user.emails[0].address
      if (email === "quanbinn@126.com") {
      Meteor.call("insertFoods", name, brand, unit, calory, totalFat, saturatedFat, cholesterol, category, imageSource, resource, caloryPercentDV, totalFatPercentDV, saturatedFatPercentDV, cholesterolPercentDV, totalFatPercentDVQuotient, saturatedFatPercentDVQuotient, cholesterolPercentDVQuotient);     
      };  
 
      // Clear form
      event.target.name.value = "";
      event.target.brand.value = "";      
      event.target.unit.value = "";
      event.target.calory.value = "";
      event.target.totalFat.value = "";
      event.target.saturatedFat.value = "";
      event.target.cholesterol.value = "";
      event.target.category.value = "";
      event.target.imageSource.value = "";
      event.target.resource.value = "";
    }
  });