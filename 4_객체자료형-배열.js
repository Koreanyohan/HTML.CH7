/* Array(배열) */

const arr1 = ['Apple', 'Banana', 'Cherry'];

console.log(arr1[0]); // 인덱스 사용하여 배열의 값 꺼내기(출력)
console.log(arr1[1]);
console.log(arr1[2]);


const arr2 = ['a', 'b', 1, 2, true]; // 자료형이 달라도 함께 저장
arr2.push(3); // 배열의 push메소드로 새로운 요소 추가
// arr2[5]에 3추가된거다.

console.log(arr2)



//객체 배열 - json사용  { key : value }
const objArr = [];

objArr.push ({name : 'Americano'});
objArr.push({name : "Latte"});
/*   //const인데 왜 추가(변경) 가능한가? -> 
   객체변수는 주소를 가지고 있다. 객체를 변경하는건 주소를 변경하는게 아니라, 해당 주소에 배열된 값만 변경하는 거라서 문제가 없는 것이다. */

console.log(objArr);    
console.log(objArr[0]);     //name : "Americano"
console.log(objArr.length);  //2