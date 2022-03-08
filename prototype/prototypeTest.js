function Person(name, age, move) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };

  this.setName = function (name) {
    this.name = name;
  };
}

const chu = new Person('경훈', '27');
const lee = new Person('이이', '24');
console.log(chu);
console.log(lee);
// 두 객체 모두 따로 메서드가 정의되어 있다.
// 이럴 경우 같은 내용인데도 생성된 것이기에 메모리 낭비가 발생한다.
// 프로토타입이란? 기존의 객체를 복사해 새로운 객체를 생성하는 방식
