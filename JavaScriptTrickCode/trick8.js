// 동적 속성 이름
// es6에서 객체의 키를 동적으로 생성 가능
const nameKey = 'name';
const emailKey = 'email';
const person = {
  [nameKey]: 'chu',
  [emailKey]: 'khchu1220@naver.com',
};
console.log(person);
