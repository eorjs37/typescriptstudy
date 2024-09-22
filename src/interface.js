"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function gretter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
const user1 = { firstName: "Choi", lastName: "DaeGeon" };
gretter(user1);
const user2 = new Student("Jane", "M.", "User");
