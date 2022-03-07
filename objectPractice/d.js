// 인스턴스 생성과정

function Plus(x) {
  // 1. 암묵적으로 빈 객체 생성 this에 바인딩

  // 2. this에 바인딩되어 있는 인스턴스 초기화
  this.x = x;
  this.getPlus = function () {
    return 10 + this.x;
  };

  // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 변환
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
const a1 = new Plus(10);
console.log(a1); // Plus { x: 10, getPlus: [Function (anonymous)] }
