// 프로토타입 체인
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
var a = new Super();
a.ultraProp = 3;
Sub.prototype = a;

// Sub()객체 자체는 ultraProp라는 값을 가지고 있지 않지만
// Sub()의 부모인 Super()의 부모인 Ultra() 최상위 객체가 가지고 있다.
// Ultra > Super > Sub 순으로 상속 받는다.
// 이것을 가능하게 하는 프로토 타입은 무엇일까?
// 생성자는 기본적으로 함수인데 함수 앞에 new를 붙이게 되면 생성자라는 함수가 되는데
// 이러한 결과는 새로운 객체를 만들어 o라고 하는 변수 속에 들어가게 된다.
// 비어있는 객체를 생성하는 것이 생성자의 역할이면 가치가 없다. ex) var o = {};
// 이렇게 하지 않고 만드는 이유는 객체를 만들 때 이 객체가 가지고 있어야 할 메서드 데이터인 프로퍼티 값을 가지고
// 주어주기를 바라기 때문이다. 왜냐? 그 객체 속에 로직이 담겨 있고 데이터가 담겨 있기 때문이다.
// 이러한 객체의 원형은 prototype이라는 특수한 프로퍼티에 저장되어 있다.
// 이렇게 prototype에 저장해뒀다가 new를 통해 생성자를 호출하게 되면 생성자 함수의 프로토타입 프로퍼티에 저장되어 있는
// 객체를 꺼내서 그것을 리턴해준다.
var o = new Sub();
console.log(o.ultraProp); // 3
// o라는 객체가 ultraProp라는 값을 가지고 있는지 확인한다. 정의한게 없기에
// o라는 객체의 생성자를 알아낸다. 그 객체의 생성자의 포로토타입 객체를 확인했는데 저장되어 있는 객체인 new Super()가 만들어 놓은 객체의 값이 3이기 때문에 이것을 반환한다.
