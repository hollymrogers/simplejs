var firstName = "Richard"
var lastName = "Gill"
console.log(firstName + " " + lastName)
function firstNameLastName(firstName, lastName) {
    return firstName + " " + lastName
}
function lastNameFirstName(firstName, lastName) {
    return lastName + ", " + firstName
}
console.log(firstName.length)

var people = ['Jack', 'John', 'James']
console.log(people.join("\r\n"))

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
function withoutFirstR(firstName){
    if(firstName.startsWith("J")) {
        return firstName.substring(1);
    } else if (firstName.startsWith("R")) {
        return firstName.slice(0, -2);
    } else {
        return firstName 
    }
}
