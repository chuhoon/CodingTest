function sum(a, b) {
  return a + b;
}

function print(value) {
  console.log(value);
}

print(sum(5, 10));
// sum함수가 먼저 실행 스택메모리에 지역변수, 반환주소값, 매개변수가 push 저장된다.
// sum함수가 종료되어 값이 반환되면 스택메모리에서 pop이 실행되어 제거된다.
// 이어서 print 함수가 실행된다. 스택메모리 쌓임
// 그 속에 console.log가 실행되고 스택메모리가 쌓인다.
// console.log 값이 반환되었다면 스택메모리에서 pop이된다.
// print도 끝나면 스택메모리에서 pop된다.

// 스택은 Array로 표현이 가능하다.
// 또한 연결리스트로 표현 가능하다. 이 경우 연결리스트의 헤드가 탑이된다.
