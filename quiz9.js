const child = {
    age : 10
}

const parent = {
    firstName : '이',
    country : '한국'
}

child.__proto__= parent;

child.firstName = '김';
child.country = '미국';
child.age = '20';

console.log(child.firstName);
console.log(child.country);
console.log(child.age);



