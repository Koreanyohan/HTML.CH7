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
