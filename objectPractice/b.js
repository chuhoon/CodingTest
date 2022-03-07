// 객체 리터럴에 의한 객체 생성 방식의 문제점
const a1 = {
  x: 10,
  plus() {
    return 10 + this.x;
  },
};

console.log(a1.plus()); // 20

const a2 = {
  x: 100,
  plus() {
    return 10 + this.x;
  },
};

console.log(a2.plus()); // 110
