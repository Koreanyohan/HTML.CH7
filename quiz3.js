

for (let i = 1 ; i<=3 ; i++){
    let result = '' // result값 공백으로 초기화. 줄바꿈.
    for (let j = 1 ; j <=5 ; j++) {
        result = result + '*'; // 여기서 console.log('*') 했다가 망함. console.log 하면 줄바꿈 된다...
    }
    console.log(result);  //줄바꿈 기능도 있다..  
}