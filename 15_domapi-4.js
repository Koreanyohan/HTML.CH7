/* html요소에 class속성 추가하기*/

const boxEl = document.querySelector('.box');

boxEl.addEventListener('click', function(){

    boxEl.classList.toggle('active'); // class속성에 active값이 없으면 추가, 있으면 삭제함 

    let hasActive = boxEl.classList.contains('active');//class속성에 active값이 있으면 hasActive에 반환 
    console.log(hasActive);
});
