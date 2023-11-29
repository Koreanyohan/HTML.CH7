document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    // document - Html문서
               //인자 - 이벤트 종류, 이벤트에서 실행시킬 함수
    // DOMContentLoaded : 문서 만들어 질때 이 함수 처리하겠다.

    btn1.onclick = function () {//btn1 버튼클릭시 수행될 일반함수
        alert(this);
        this.textContent = '버튼이름변경';
    };



    btn2.onclick = () => {//btn2 버튼 클릭시 수행될 화살표 함수
        alert(this);
    };  

});


