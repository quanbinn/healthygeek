Template.superhighCholestorelPercentFood.helpers({
	'superhighCholestorelPercentFood': function () {
	  return Foods.find(
	      {cholesterolPercentDVQuotient: {$gt: 1.5}}, 
	      {sort: {cholesterolPercentDVQuotient: -1}}
	      );
	},
});