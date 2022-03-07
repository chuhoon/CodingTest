// 구조 분해 할당 사용
const person = {
  name: 'chu',
  age: 27,
  number: 0123,
  company: 'welfore. inc.',
  address: 'Seoul',
};

const { name, age, sex = '남' } = person;
console.log(sex);
