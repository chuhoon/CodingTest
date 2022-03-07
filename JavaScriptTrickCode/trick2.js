// 2. 배열 내 같은 요소 제거하기
const names = ['chu', 'lee', 'kim', 'na'];
const arrayName = Array.from(new Set(names));
const nameSpread = [...new Set(names)];
