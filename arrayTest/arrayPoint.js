const arr = [];
console.log(arr);

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

// 자바스크립트 Array는 HashMap에 가깝다
console.log(arr.length);
// index가 number가 아니어도 된다.
arr['string'] = 10;
arr[false] = 0;
console.log(arr);
console.log(arr.length);

arr[4] = 5;
console.log(arr.length);
