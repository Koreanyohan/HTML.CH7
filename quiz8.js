// 해설 풀이랑 좀 다름. 

const arr1 = [1,'aa', true, 5, 10];

    function sum(a, b) {
        a = 0;
        b = length.arr1
        let sum = 0;
        for (let i = 0; i < b; i++) {
    
            if ((typeof arr1[i]) == 'number') {
                sum = sum + arr1[i];
            }
        }
            console.log('합계는' + sum + '입니다');
    }



// Q. 4번문제를 함수로 변경하세요.

    const func = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if((typeof arr[i]) == 'number'){
                sum =  sum + arr[i];
            }
        }
        console.log(sum);
    }
    
    const arr = [1,'aa', true, 5, 10];
    func(arr);
    

    // ㄴ 풀이 업뎃 안됬음. git pull 받을때마다 front study 확인해보자
    