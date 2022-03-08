const arr = [1, 2, 3, 4, 5];

// shift 배열의 맨 앞 요소 삭제
// unshift 배열의 맨 앞 요소 추가
arr.shift();
arr.shift();
console.log(arr); // 3,4,5

arr.unshift(7);
console.log(arr); // 7,3,4,5

// slice
// 중간에 있는 요소 자름, 원래 있던 원본 배열 변경X
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2.slice(2, 4)); // 3,4

// 중간에 있는 인덱스 자름, 원래 있던 원본 배열 변경ㅇ
arr2.splice(2, 2);
console.log(arr2);
