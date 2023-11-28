/* while문 - 반복횟수 명확하지 않을 때 */ 
let i = 1;           //초기화식
while (i <= 10) {    // 조건식
    console.log(i);  // 증감식
    i ++ ;
}


/* for문 - 반복횟수 명확할 때*/
for (let i = 1 ; i <= 10 ; i++) {// (초기화식 ; 조건식; 증감식)
console.log(i);
}


/* for-in문 - 배열안의 값 꺼낼때 유용. 더 간단, 명확함.  */   
let arr = [3,4,5];

for (let i in arr) { //배열을 순회하면서 인덱스를 꺼냄
    console.log (i + ', ' + arr [i]) // i -> 0~2 꺼냄
}






































