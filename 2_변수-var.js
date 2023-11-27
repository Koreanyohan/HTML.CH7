// console.log(puppy) ; // 변수를 선언하기 전에 사용할 수 없음
                          // puppy는 변수다
// let puppy = "cute" ; // 전역 변수
// {
//     let puppy = "so cute" ; //지역 변수
// }
// console.log(puppy) ;  // cute


console.log(cat); // 문제점 1. 변수를 선언하기 전에 사용할 수 있음.
                   // = hoisting.  선언되기 전에 변수 끌어와서 미리 사용.


var cat = "cute";  // 문제점 2. 블록 스코프 인식 못함.
{
    var cat = "so cute" ; //블록스코프로 지역변수를 구분할 수 없음.
}
console.log(cat); // 전역변수에 저장된 cute가 나와야 정상임. 근데 지역변수와 전역변수 구분 못해서 지역변수에 저장된 so cute가 출력 됨.