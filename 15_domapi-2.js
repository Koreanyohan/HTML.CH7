//querySelector() 선택자를 통해 html에서 요소를 찾는 함수. 검색을 통해 찾은 첫번째 요소 반환

//인자로 css선택자 입력
const boxE1 = document.querySelector('.box');
    // .querySelector -> css선택자 요소 중 첫번째 것만 선택.


//null이 출력
console.log(boxE1);

//4행에서 box라는이름의 엘리먼트를 찾을 수 없었음. why? js는 body들어가기전에 head부분에서 미리 실행. 당연히 head에 없는 요소니까 못찾았지. 
// -> script defer sec~라고 쓰면 body태그 수행 끝나고 script 수행됨. querySelector이라서 박스들 중에 1개 (     <div class ="box"> BOX1</div>만 뜬다.    )