// 비구조화 할당 사용
// 함수 객체를 넘길 때 필요한 것만 사용 가능하다.
const showCompany = ({ name, number, address }) => {
  return {
    name,
    number,
    address,
  };
};
const a = showCompany({ name: 'Welfore', address: 'seoul', number: 0123 });
console.log(a);
