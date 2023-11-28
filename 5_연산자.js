//산술 연산자
console.log(10 + 2); // 12
console.log(10 - 2); // 8
console.log(10 * 2); // 20
console.log(10 / 2); // 5
console.log(10 % 2); // 0

// 대입연산자
let x = 1;

// 증감 연산자
console.log(++x);//1더하고 x사용          2
console.log(x++);//x먼저 사용하고 1더한다 2
console.log(--x);//1빼고 x 사용           2  앞의 식으로 
                                        // 인해 3됬던 x에 1 뺀다
console.log(x--);//x 먼저 사용하고 1뺌    2 앞의 열에서 사용된 x

// 비교연산자
console.log(1=="1");  //ture  값이 같으면 참
console.log(1==="1"); //false 값과 자료형이 모두 같으면 참
console.log(1!=2);    //ture  값이 다르면 참
console.log(1>2);     //false
console.log(1>=2);    //false
console.log(1<2);     //true
console.log(1<=2);    //true

//논리연산자
console.log(true&&true);  //true   모두 참이면 참
console.log(true&&false); //false  모두 참이면 참 
console.log(true || true); //true  둘 중 하나라도 참이면 참
console.log(true || false); //true 둘 중 하나라도 참이면 참
console.log(!true);      //false 참이면 거짓, 거짓이면 참을 반환

//문자열 결합 연산자
console.log ("좋은" + "하루 되세요" + "!");


// typeof 연산자 : typeof value    -> 자료형 저장
console.log(typeof '42') //'String'
console.log(typeof 42)   //'number'
console.log(typeof 1.123) // 'number'
console.log(typeof true) // 'boolean'
console.log(typeof function(){}) // 'function'
console.log(typeof undefined)   // 'undefined'
console.log(typeof null)        // 'object'
console.log(typeof {})           //'object'
console.log(typeof [])           //'object'  


