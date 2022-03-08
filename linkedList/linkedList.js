// 생성자 부분
// 값과 포인터로 구성되어 있음 생성될 때는 포인터는 아무것도 가리키지 않음
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 헤드와 테일 포인터로 이루어져 있고 해당 클래스는 노드끼리 엮는 역할만 할뿐 그 자체는 노드를 가지지 않는다.
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 찾기 로직
  // currNode는 값을 찾기 전까지 계속 순회하게 한다. while 루프를 돌려 값을 찾을 때까지 다음 요소로 넘어간다.
  // 값을 찾으면 루프를 끝내고 해당 currNode 값을 반환한다.
  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 추가 로직
  // 끝부분 추가 append 로직, 중간 추가 insert 로직 2개로 나뉜다.
  // 받은 값을 그대로 사용해 Node를 생성하고 헤드가 비어있다면 연결리스트의 값이 없다는 뜻이기에
  // 헤드와 테일포인터에 생성된 노트를 가리키게 만든다. 만약에 헤드가 비어있지 않다면 값이 존재한다는 뜻이기에
  // 테일의 포인터가 새로 생성된 노드를 가리키게 만든다.
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 먼저 입력 받은 값으로 노드를 생성 새로 생긴 노드를 입력 받은 노드의 다음을 가리키도록 한다.
  // 그리고 입력 받은 노드의 다음을 새로 생성된 노드를 가리키게 만든다.
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 삭제 로직
  // 값을 찾은 후 삭제하도록 함 해당 로직은 선형시간이 소요된다.
  // while을 돌아 이전 노드를 찾고 찾았으면 이전노드가 다음의 다음을 가리키도록 수정한다.
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SingleLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
