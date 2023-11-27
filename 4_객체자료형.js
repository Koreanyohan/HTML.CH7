/* Object (객체) */

const user = {
    name : '둘리',   //프로퍼티 
    age : 10,        //프로퍼티
    get_name : function () { //함수
        console (this.name);
    }
};

//객체의 프로퍼티를 꺼내기
console.log(user.name); //도트 연산자 사용
console.log(user["age"]); // 대괄호 사용 
    //  ㄴ  .사용하든  [""] 사용하든 같음.
