// Publish the user's own BMI infos and only those
// who created their BMI infos and see his or her record.
Meteor.publish('theBMIInfos', function() {
	var currentUserId = this.userId;
	return BMIInfos.find({createdBy: currentUserId});
});

// Publish the foods
Meteor.publish('theFoods', function() {
	return Foods.find();
});