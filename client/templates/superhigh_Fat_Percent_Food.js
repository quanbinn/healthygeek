Template.superhighFatPercentFood.helpers({
  'superhighFatPercentFood': function () {
    return Foods.find(
        {totalFatPercentDVQuotient: {$gt: 1.5}}, 
        {sort: {totalFatPercentDVQuotient: -1}}
    );
  },
});