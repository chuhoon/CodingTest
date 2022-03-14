const table = new Map();
table.set('key', 100);
table.set('key2', 'Hello');

console.log(table['key']);
console.log(table.get('key'));

const object = { a: 1 };
table.set(object, 'A1'); // Map은 Object도 Key로 사용 가능

console.log(table.get(object));

table.delete(object);

console.log(table.get(object));
console.log(table.keys());
console.log(table.values());

table.clear();

console.log(table.values());
