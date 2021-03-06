function foo() {
  x = 10;
}

console.log(x);
// x의 할당자를 지정해주지 않으면 x는 암묵적 전역으로 전역 변수로 인식된다.
// 이럴 경우 개발 시 오류나 에러가 발생될 확률이 높아진다.
// 따라서 반드시 const, let, var와 같은 할당자를 지정해야한다.
// 하지만 ES Lint를 사용함으로써 대체 가능하다.
