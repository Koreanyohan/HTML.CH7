const funct =  (a,b) => {   // a행 b열만큼 별표그리기
    for (let i = 1 ; i<=a ; i++){
        let result = '' // result값 공백으로 초기화. 줄바꿈.
        for (let j = 1 ; j <=b ; j++) {
            result = result + '*'; // 여기서 console.log('*') 했다가 망함. console.log 하면 줄바꿈 된다...
        }
        console.log(result);  //줄바꿈 기능도 있다..  
    }
}

funct (5,7); // 5행 7열 사각형 (가로 7 세로 5)
//풀이는 함수식에서 a랑 b가 바꼈는데, a(가로)*b(세로) 사이즈 나타내려고 그럼.





// Q. 3번문제를 함수로 변경하세요.

const func = (a, b) => {
    for(let i =0; i < b; i++){
        let result = '';
        for(let j=0; j<a; j++){
            result = result + '*';
        }
        console.log(result);
    }
}
const a = 5, b = 3;
func(a, b);


// 그냥... console문 대신 result변수로 풀기
const func2 = (c, d) => {
    for(let i =0; i < d; i++){
        let result = '';
        for(let j=0; j<c; j++){
            result = result + '*';
        }
        result = result + '\n'
    }
    console.log (result);
}


const c = 5, d = 3;
func(c, d);