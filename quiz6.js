const foodList = ['pizza', 'Hamburger', 'Chicken', 'Steak'];

console.log(foodList[0]);
console.log(foodList[3]);

// 내 풀이 : console.log(`${foodList[0]} ${foodList[3]}`);

// 해답 풀이 :
const food1 = foodList[0];
const food2 = foodList[3]; // = foodList[FoodList.length-1]
const result = food1 + ' ' + food2 ; // +는 문자열 결합 연산자
                    // food1과 food2가 문자열이라 가능한 식이다.
                    // ' '는 띄어쓰기
console.log(result);
                // ㄴ 2번문제



// Q. 2번문제를 함수로 변경하세요.

function fun(arr) {
    const firstValue = arr[0];
    const lastValue = arr[arr.length - 1];
    const result = firstValue + ' ' + lastValue;

    return result; //결과반환
}

const arr = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];
console.log(arr());

// 야 풀이 업뎃 제대로안됬다 . 다못적음