//dir메서드는 객체의 속성을 출력
console.dir(document);


//현재 노드의 자식 노드 리스트 반환
console.dir(document.childNodes)
//[<!DOCTYPE html>(선언문), html(실제 엘리먼트 노드)]


console.dir(document.childNodes[1].childNodes)
//[head, text, body]   
//document.childNode[1]는  html태그 말함. 이것의 childnodes는 head,text,body다. 

