// 생성자 부분
// 값과 포인터로 구성되어 있음 생성될 때는 포인터는 아무것도 가리키지 않음
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
// 기존 연결리스트 코드에서 헤드를 탑으로 지정하고 pop은 오직 헤드를 제거하는 방식으로 로직을 수정
