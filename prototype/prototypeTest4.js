// 상속 흉내내기2 - 부모 생성자를 빌려 사용 가능
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name || '경훈';
};

function Kor(name) {
  Person.apply(this, arguments);
}
Kor.prototype = new Person();
Kor.prototype.setName = function (name) {
  this.name = name;
};

const chu = new Person('추경훈');
const kim = new Person('김경훈');
console.log(chu.getName());
console.log(kim.getName());
kim.setName('최경훈');
console.log(kim.getName());
