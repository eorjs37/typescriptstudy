//함수 인터페이스 정의
interface SquareFunc{
	(num:number):number;
}

const squarefunc:SquareFunc = (num:number)=>{
	return num*num;
}
console.log(squarefunc(10));
