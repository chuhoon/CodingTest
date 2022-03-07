// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'chu';
person.say = function () {
  console.log('안녕! ' + this.name);
};

console.log(person); //{ name: 'chu', say: [Function (anonymous)] }
person.say(); //안녕!chu
