class Student{
	fullName:string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string){
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person{
	firstName:string;
	lastName:string;
}

function gretter(person:Person){
	return "Hello, " + person.firstName + " " + person.lastName;
}

const user1:Person = {firstName:"Choi",lastName:"DaeGeon"}

gretter(user1);
const user2 = new Student("Jane", "M.", "User")