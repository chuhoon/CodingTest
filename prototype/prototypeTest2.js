function Person(name, age, move) {
  this.name = name;
  this.age = age;

  Person.prototype.getName = function () {
    return this.name;
  };

  Person.prototype.setName = function (name) {
    this.name = name;
  };
}

const chu = new Person('경훈', '27');
const lee = new Person('이이', '24');
console.log(chu);
console.log(lee);
console.log(Person.constructor);
console.log(Person.__proto__);
console.log(chu.constructor);
console.log(chu.__proto__);
// 이렇게 생성한 후 객체를 설정하면 하위 객체는 상위 객체를 바라본다.
// 기존 객체를 효율적으로 사용 가능하다.
