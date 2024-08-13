# typescriptstudy

## node version : 20.12.0

## install typescript
```bash
npm install typescript
```


## typescript 컴파일
```json
//package.json
{
	"scripts":{
		"tsc":"tsc"
	}
}
```

```typescript
// gretter.ts
function gretter(person){
	return 'hello'+person;
}

const person1 = gretter('hong')
console.log(person1);

```

```bash
npm run tsc src/gretter.ts
```

## typescript 설정
```
tsc --init
```