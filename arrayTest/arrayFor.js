const arr = [1, 2, 3, 4, 5];

// for of 배열 내 순환하는 방법
for (const item of arr) {
  console.log(item);
}

// 배열은 객체와 타입이 동일해 객체처럼 사용이 가능하다
arr['key'] = 'value';
console.log(arr);
console.log(arr.length);
// 배열을 객체와 동일하게 사용해봤지만 length를 확인해도 5로 출력된다.
// 자바스크립트의 특이점... 추천하지 않는 방법
