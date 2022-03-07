// &&와|| 활용법
// 기본 값이 0, undefined, 빈 문자열, null일 때 Guset로 할당된다.
const name = participantName || 'Guest';

// &&
// flag가 true일 때 함수가 실행된다.
flag && func();

// 객체 병합에도 사용 가능하다.
const showCompany = (showName) => {
  return {
    name: 'welfore. Inc.',
    ...(showName && { number: 123 }),
  };
};

console.log(showCompany(false));
console.log(showCompany(true));
