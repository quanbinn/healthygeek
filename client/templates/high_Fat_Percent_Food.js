Template.highFatPercentFood.helpers({
  'highFatPercentFood': function () {
    return Foods.find(
        {$and: 
          [
            {totalFatPercentDVQuotient: {$gt: 1.0}}, 
            {totalFatPercentDVQuotient: {$lte: 1.5}}
          ]

        }, 
        {sort: {totalFatPercentDVQuotient: -1}}
        );
  }
});