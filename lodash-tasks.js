//1
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]
_.map(gillFamily, 'name')

//3
_.sumBy(gillFamily, 'age')

//4
'robin', age: 60}]
_.meanBy(gillFamily, 'age')

//5
_.filter(gillFamily, function(o) { return o.age <50;})

//6
_.size(gillFamily);

//7
_.remove(gillFamily, function(o) { return o.age >50;})
_.size(gillFamily);
