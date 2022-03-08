// 객체 생성 방법
const obj1 = new Object();
const obj2 = {};
const obj3 = { name: 'chu', age: 27, email: 'khchu1220@naver.com' };
console.log(obj1);
console.log(obj2);
console.log(obj3);

// 객체 요소 추가
obj3['sex'] = 'M';
obj3.phone = '01012345678';
console.log(obj3);

// 객체 요소 삭제
delete obj3.phone;
console.log(obj3);

// 키 존재 확인
console.log('email' in obj3);
console.log('phone' in obj3);

// 객체 속 키와 속성 확인
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

// 객체 순환 문법
for (const key in obj3) {
  console.log(key, obj3[key]);
}
