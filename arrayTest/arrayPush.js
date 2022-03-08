const arr = [1, 2, 3];
console.log(arr);

arr.push(4);
arr.push(5, 6);

console.log(arr);

// 3번 인덱스 128 추가
arr.splice(3, 0, 128);
console.log(arr);

// 3번 인덱스 삭제
arr.splice(3, 1);
console.log(arr);
