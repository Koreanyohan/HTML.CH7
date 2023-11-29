
function person (name, age) {
    this.name = name;
    this.age = age;
}


person.prototype.hair = 'black';
let kim = new person ('김', 20) ; // 객체 생성
let park = new person ('박', 30) ;

console.log (kim.name);
console.log (kim.age);
console.log (kim.hair);

console.log(park.name);
console.log(park.age);
console.log(park.hair);

console.log(person.prototype);
console.log(kim.__proto__);


