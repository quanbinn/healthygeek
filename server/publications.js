Meteor.publish('theBMIInfos', function() {
	var currentUserId = this.userId;
	return BMIInfos.find({createdBy: currentUserId});
});