/* 매개변수, 반환값이 없는 함수 선언 */

 //함수 선언
function hello () {
    console.log ('안녕하세요')
}
 // 함수 호출
hello();


/* 매개변수, 반환값이 있는 함수 선언 */
function sum (x,y) {
    return x + y;
}
const result = sum(2,3); // 반환값(return)이 있는 함수는 호출 후에, 변수에 저장해야만 사용 가능하다. return없는 함수는 변수에 저장 안해도 되지.
console.log(result);
