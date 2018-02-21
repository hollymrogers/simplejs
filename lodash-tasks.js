//1
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]
var gillName
gillName = _.map(gillFamily, 'name')

//2
var gillName
gillName = _.map(gillFamily, 'name')
var greet = function(name) {
    return name + " gill";
},
    greetings = _.map(gillName, greet);
console.log(greetings)

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
var gillUnderFifty = _.filter(gillFamily, function(o) { return o.age <50;})
var gillUnderFiftySize = _.size(gillUnderFifty);
console.log(gillUnderFiftySize)

//8
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]
_.filter (gillFamily, function (o) {
return o.age>50; })
var gillName
gillName =_.map(gillFamily, 'name')
var greet = function(name) {
    return name + " gill";
},
    greetings = _.map(gillName, greet);
_.join(greetings,", ")

//11
var sortGillAge
sortGillAge = _.sortBy(gillFamily, ['age'])

//14
var youngestGill
youngestGill = _.minBy(gillFamily, 'age')

//16
var gillName = _.map(gillFamily, 'name')
_.startCase(_.toLower(gillName));
