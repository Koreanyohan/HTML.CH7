// 해설 풀이랑 좀 다름. 

const arr = [1,'aa', true, 5, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    
    if ((typeof arr[i]) == 'number') {
        sum = sum + arr[i];
    }
}
    console.log('합계는' + sum + '입니다');


    