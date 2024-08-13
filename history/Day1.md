
## 타입 표기
```typescript
/* Bad */
// function type1(val:string){
// 	return val;
// }

// const user = [1,2,3];
// type1(user)

/* Good */
function type1(val:string){
	return val;
}

const user = 'me';
type1(user)
```

## interface
```
인터페이스는 상호간의 약속 혹은 규칙을 말하며, 여러가지 선언된 프로퍼티를 통하여 새로운 타입을 생성
```
### Todo interface
```typescript
interface ToDo{
	id:number;
	content:string;
	completed:boolean;
}

let todo:ToDo;
todo = {id:1,content:'할일',completed:false}
```

### SquareFunc interface
```
인터페이스는 함수타입으로도 선언할 수 있다.
```

```typescript
//함수 인터페이스 정의
interface SquareFunc{
	(num:number):number;
}

const squarefunc:SquareFunc = (num:number)=>{
	return num*num;
}
console.log(squarefunc(10));

```