// 상속 흉내내기1 - 부모 객체를 이용해 프로토타입 함수 정의
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name || '경훈';
};

function Kor(name) {}
Kor.prototype = new Person();

const chu = new Person('추경훈');
const kim = new Person('김경훈');
console.log(chu.getName());
console.log(kim.getName());
// 하위 객체로 만들 생성자 함수를 만든 후 해당 생성자 함수에 프로토 타입으로 상위 객체를 대입한다.
// 이러면 상위 객체의 함수가 링크가 되어 그대로 이용가능하다. 하지만 내부적으로 생성된 프로토타입 변수는 사용 불가능하다.
