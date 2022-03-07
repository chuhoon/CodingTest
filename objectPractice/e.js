// 생성자 함수로서 정의하지 않은 일반 함수
function plus(a, b) {
  return a + b;
}

// 생성자 함수로 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let a1 = new add();

// 함수가 객체를 반환하지 않아도 반환문이 무시되고 빈 객체가 생성되어 반환
console.log; // {}

// 객체를 반환하는 일반 함수
function person(name, age) {
  return { name, age };
}

// 일반 함수를 new 연산자와 함께 호출
a1 = new person('chu', '27');
// 함수가 생성한 객체를 반환
console.log(a1); // {name: "chu", age: "27"}
