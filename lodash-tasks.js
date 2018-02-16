//1
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]
var gillName
gillName = _.map(gillFamily, 'name')

//3
var sumOfGillAges
sumofGillAges = _.sumBy(gillFamily, 'age')

//4
var meanOfGillAges
meanOfGillAges = _.meanBy(gillFamily, 'age')

//5
var gillUnderFifty
gillUnder50 = _.filter(gillFamily, function(o) { return o.age <50;})

//6
var gillFamilySize
gillFamilySize = _.size(gillFamily);

//7
var gillUnderFiftySize
_.remove(gillFamily, function(o) { return o.age >50;})
gillUnderFiftySize = _.size(gillFamily);

//11
var sortGillAge
sortGillAge = _.sortBy(gillFamily, ['age'])

//14
var youngestGill
youngestGill = _.minBy(gillFamily, 'age')
