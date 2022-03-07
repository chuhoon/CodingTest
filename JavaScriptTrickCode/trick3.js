// Spread 연산자를 이용한 객체 병합
// 같은 키는 마지막에 대입된 값으로 변환
const person = {
  name: 'chu',
  age: 27,
  height: 181,
};

const company = {
  name: 'welfore Inc',
  address: 'Seoul',
};

const chu = { ...person, ...company };
console.log(chu);
