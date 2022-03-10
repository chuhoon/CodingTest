class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // 큐 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐 삭제
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  // 큐의 가장 앞에 있는 값을 알아내는 함수
  peek() {
    return this.queue[this.front];
  }

  // 큐의 크기
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
queue.enqueue(4);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
