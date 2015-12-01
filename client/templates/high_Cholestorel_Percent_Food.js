Template.highCholestorelPercentFood.helpers({
  'highCholestorelPercentFood': function () {
    return Foods.find(
        {$and: 
          [
            {cholesterolPercentDVQuotient: {$gt: 1.0}}, 
            {cholesterolPercentDVQuotient: {$lte: 1.5}}
          ]

        }, 
        {sort: {cholesterolPercentDVQuotient: -1}}
        );
  },
});