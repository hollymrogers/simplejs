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
_.filter (gillFamily, function (o) {
return o.age>50; })
var gillName =_.map(gillFamily, 'name')
var greet = function(name) {
    return name + " gill";
},
    greetings = _.map(gillName, greet);
<<<<<<< HEAD
 _.join(greetings,", ")

=======
var gillUnder50 = _.join(greetings,", ")
console.log(gillUnder50)
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6

//9
var gillFamilyTable = "<tr><th>Name</th> <th>Age</th></tr>" 
_.forEach(gillFamily, function(familyMember){
 var familyMemberRow = "<tr><td>" + familyMember.name + "</td><td>" + familyMember.age+ "</td></tr>"
gillFamilyTable += familyMemberRow
})
var wrappedTable = "<table>" + gillFamilyTable + "</table>"
console.log(wrappedTable)

//10
<<<<<<< HEAD
/*var gillFamilyAge = _.filter(gillFamily, function(familyMember) {
	var familyAge = familyMember.age
	return {...familyMember, age: familyAge <26}
})*/
=======
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6
var gillFamilyAge = _.map(gillFamily, function(familyMember) {
	if (familyMember.age <26) {
		return familyMember
	} else  { 
		return _.omit(familyMember, ['age'])
	}
})
<<<<<<< HEAD
console.log("Question 10")
console.log(gillFamilyAge)

=======
console.log(gillFamilyAge)
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6

//11
var sortGillAge = _.sortBy(gillFamily, ['age'])
console.log(sortGillAge)

//12
var gillFamilyLetterD = _.filter(gillFamily, function(familyMember) {
var firstLetter = familyMember.name.charAt(0) 
 return firstLetter === 'd' || firstLetter === 'D'
})

//13
var groupGillFamily = _.groupBy(gillFamily, function (familyMember) {
	return familyMember.name.charAt(0)
})
console.log(groupGillFamily)

//12
var gillFamilyLetterD = _.filter(gillFamily, function(familyMember) {
var firstLetter = familyMember.name.charAt(0) 
 return firstLetter === 'd' || firstLetter === 'D'
})
console.log("Question 12")
console.log(gillFamilyLetterD)

//13
var groupGillFamily = _.groupBy(gillFamily, function (familyMember) {
	return familyMember.name.charAt(0)
})
console.log(groupGillFamily)


//14
var youngestGill = _.minBy(gillFamily, 'age')
console.log(youngestGill)

//15
var letter = 'a'
<<<<<<< HEAD
var results = _.filter(gillFamily, function(familyMember) { 
	return familyMember.name.includes(letter) })
console.log("Question 15")
=======
var results = _.filter(gillFamily, function(item) { return item.name.includes(letter)});
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6
console.log(results)

//16
var gillFamilyCapitalised = _.map(gillFamily, function(familyMember) { 
	var capitaliseName = _.capitalize(familyMember.name)
	return {...familyMember, name: capitaliseName}
})
<<<<<<< HEAD
console.log("Question 16")
=======
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6
console.log(gillFamilyCapitalised)

//17
var letter = 'a'
var gillFamilyA = _.filter(gillFamily, function(familyMember) {
return familyMember.name.includes(letter)})
<<<<<<< HEAD
var gillYoungestA = _.minBy(gillFamilyA, 'age')
=======
var gillYoungestA = _.minBy(gillFamilyA, 'age') 
>>>>>>> 60df3e1aca1a75810a830fa1c73c404aa7b7caa6
	console.log(gillYoungestA)
