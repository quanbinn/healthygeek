// the global variable BMIInfos refers to
// the collection 'bmiinfos'
BMIInfos = new Mongo.Collection('bmiinfos');

Meteor.methods({
	insertBMIInfosData: function(myHeight, myWeight, myBMI) {
		var currentUserId = Meteor.userId();
		BMIInfos.insert({
            Height: myHeight,
            Weight: myWeight,
            BMI: myBMI,
            createdAt: new Date(),
            createdBy: currentUserId
        });  
	}
});