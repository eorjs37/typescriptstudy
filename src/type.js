/* Bad */
// function type1(val:string){
// 	return val;
// }
// const user = [1,2,3];
// type1(user)
/* Good */
function type1(val) {
    return val;
}
var user = 'me';
type1(user);
