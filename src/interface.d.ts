declare class Student {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string);
}
interface Person {
    firstName: string;
    lastName: string;
}
declare const user1: Person;
declare const user2: Student;
