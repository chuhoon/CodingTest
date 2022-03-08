// 프로토타입 체인
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

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

// 주의점
// Super를 서브가 상속 받고 싶으면 상속 받고 싶은 객체를 넣어야한다.
// ex) Sub.prototype = Super.prototype           XXX
// 이럴경우 Sub의 부모 객체인 Super의 객체에도 영향이 미치기 때문에 이러한 것은 문제를 발생시킬 수 있다.
// 어떠한 객체를 상속 받고 싶을 때는 그 객체의 프로토타입을 받아와서는 XX 그 객체의 복제본을 가져와야한다.
var o = new Sub();
console.log(o.ultraProp); // true
