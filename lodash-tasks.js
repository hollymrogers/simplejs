//1
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]
var gillName = _.map(gillFamily, 'name')

//2
var gillFamilySurname = _.map(gillFamily, function(familyMember) {
 return familyMember.name + " gill"
})
console.log(gillFamilySurname)

//3
var sumOfGillAges = _.sumBy(gillFamily, 'age')

//4
var meanOfGillAges = _.meanBy(gillFamily, 'age')

//5
var gillUnderFifty
gillUnder50 = _.filter(gillFamily, function(o) { return o.age <50;})

//6
var gillFamilySize = _.size(gillFamily);

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

//9
var gillFamilyTable = "<tr><th>Name</th> <th>Age</th></tr>" 
_.forEach(gillFamily, function(familyMember){
 var familyMemberRow = "<tr><td>" + familyMember.name + "</td><td>" + familyMember.age+ "</td></tr>"
gillFamilyTable += familyMemberRow
})
var wrappedTable = "<table>" + gillFamilyTable + "</table>"
console.log(wrappedTable)

//11
var sortGillAge = _.sortBy(gillFamily, ['age'])

//12
var gillFamilyLetterD = _.filter(gillFamily, function(familyMember) {
var firstLetter = familyMember.name.charAt(0) 
 return firstLetter === 'd' || firstLetter === 'D'
})

//14
var youngestGill = _.minBy(gillFamily, 'age')

//15
var letter = 'a'
var results = _.filter(gillFamily, function(item) { return item.name.indexOf(letter) > -1; });
console.log(results)

//16
var gillFamilyCapitalised = _.map(gillFamily, function(familyMember) { 
	var capitaliseName = _.capitalize(familyMember.name)
	return {...familyMember, name: capitaliseName}
})
console.log(gillFamilyCapitalised)
