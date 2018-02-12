var firstName = "Richard"
var lastName = "Gill"
console.log(firstName + " " + lastName)
function firstNameLastName(firstName, lastName) {
    return firstName + " " + lastName
}
function lastNameFirstName(firstName, lastName) {
    return lastName + ", " + firstName
}
firstName.length

var people = ['Jack', 'John', 'James']
console.log(people);

function withoutFirst(firstName){
return firstName.substring(1);
}

function withoutFirstJ(firstName) {
    if(firstName.startsWith("J")) {
        return firstName.substring(1);
    } else {
        return firstName;
    }
}

