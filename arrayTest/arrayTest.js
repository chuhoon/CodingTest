// 배열의 편의성 소개

const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5); // 입력 받은 파라미터의 값으로 모든 요소를 추가한다.
const arr6 = Array.from(Array(5), function (v, k) {
  return k + 1;
}); // 로직 함수 속에 v는 배열의 값 k는 배열의 인덱스를 나타냄

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];
console.log(arr7.length);

arr7.length = 3;
console.log(arr7);
// 배열의 length를 내 임의대로 조정 가능
// 뒤 배열의 길이가 잘림 사용 권장 X

// join
const arr8 = [1, 2, 3, 4, 5, 6];
console.log(arr8.join(', '));

// reverse
console.log(arr8.reverse());
console.log(arr8);
// 리버스 함수 사용시 한번이라도 사용하면 원래 있던 배열에도 영향이 끼침

const arr9 = [1, 2];
const arr10 = [3, 4];
console.log(arr9.concat(arr10));
// 배열 합치기
