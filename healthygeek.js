Healthygeeks = new Mongo.Collection('healthygeeks');
Foods = new Mongo.Collection('foods');

Foods.insert(
  {
      name: '瘦牛肉', unit: 100, calory: 183, totalFat: 8.46, saturatedFat: 3.422, cholesterol: 83, category: 'naturalfood', resource: 'http://ndb.nal.usda.gov/ndb/foods/show/4005?fg=Beef+Products&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=beef'
  }    
);
Foods.insert(
  {
    name: '鸡蛋', unit: 44, calory: 63, totalFat: 4.18, saturatedFat: 1.375, cholesterol: 164, category: 'naturalfood', resource: 'http://ndb.nal.usda.gov/ndb/foods/show/112?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=egg'
  }
);
Foods.insert(
  {
    name: '韭菜包', brand: "味全", unit: 150, calory: 400, totalFat: 24, saturatedFat: 6, cholesterol: 0, category: 'conveniencefood'
  }
);
Foods.insert(
  {
    name: '湖南腊肉',brand: "新东阳食品",unit: 84,calory: 340,totalFat: 25,saturatedFat: 8,cholesterol: 95,category: 'conveniencefood'
  }
);
Foods.insert(
  {
    name: '脱脂牛奶',unit: 100,calory: 35,totalFat: 0.18,saturatedFat: 0.117,cholesterol: 2,category: 'naturalfood',resource: 'http://ndb.nal.usda.gov/ndb/foods/show/8457?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=milk+fat+free'
  }
);
Foods.insert(
  {
    name: '花生',unit: 100,calory: 567,totalFat: 49.24,saturatedFat: 6.279,cholesterol: 0,category: 'naturalfood',resource: 'http://ndb.nal.usda.gov/ndb/foods/show/4800?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=peanut'
  }
);
Foods.insert(
  {
    name: '12英寸的奶酪比萨',brand: "必胜客",unit: 100,calory: 280,totalFat: 12.56,saturatedFat: 5.184,cholesterol: 21,category: 'fastfood',resource: 'http://ndb.nal.usda.gov/ndb/foods/show/6775?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=pizza'
  }
);
Foods.insert(
  {
    name: '金枪鱼三明治-含有生菜和西红柿的白面包',brand: "赛百味",unit: '12inch',calory: 1048,totalFat: 57.07,saturatedFat: 10.39,cholesterol: 133,category: 'fastfood',resource: 'http://ndb.nal.usda.gov/ndb/foods/show/6729?fg=&man=&lfacet=&format=&count=&max=25&offset=&sort=&qlookup=subway'
  }
);

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

      // Insert a task into the collection
      Healthygeeks.insert({
        Height: yourHeight,
        Weight: yourWeight,
        BMI: yourBMI
      });
 
      // Clear form
      event.target.yourHeight.value = "";
      event.target.yourWeight.value = "";
    }
  });

  Template.addFoodForm.events({
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
      document.getElementById("foodResource").textContent = "来源: " + resource;  

      document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
      document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV +"%";  
      document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%";  
      document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV +"%";  

      document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient;  
      document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient ;  
      document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient;  

      // Insert a food into the collection
      Foods.insert({
        name: name,
        brand: brand,
        unit: unit,
        calory: calory,
        totalFat: totalFat,
        saturatedFat: saturatedFat,
        cholesterol: cholesterol,
        category: category,
        resource: resource,

        caloryPercentDV: caloryPercentDV,
        totalFatPercentDV: totalFatPercentDV,
        saturatedFatPercentDV: saturatedFatPercentDV,
        cholesterolPercentDV: cholesterolPercentDV,

        totalFatPercentDVQuotient: totalFatPercentDVQuotient,
        saturatedFatPercentDVQuotient: saturatedFatPercentDVQuotient,
        cholesterolPercentDVQuotient: cholesterolPercentDVQuotient
      });
 
 
      // Clear form
      event.target.name.value = "";
      event.target.brand.value = "";      
      event.target.unit.value = "";
      event.target.calory.value = "";
      event.target.totalFat.value = "";
      event.target.saturatedFat.value = "";
      event.target.cholesterol.value = "";
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
