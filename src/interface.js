var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function gretter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Choi", lastName: "DaeGeon" };
gretter(user1);
var user2 = new Student("Jane", "M.", "User");
