// 생성자 함수
function Plus(x) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.x = x;
  this.getPlus = function () {
    return 10 + this.x;
  };
}

// 인스턴스 생성
const a1 = new Plus(10);
const a2 = new Plus(100);

console.log(a1.getPlus()); // 20
console.log(a2.getPlus()); // 110
