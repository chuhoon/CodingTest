const table = new Set();

table.add('key'); //key와 value가 동일하게 들어간다.
table.add('key2');

console.log(table.has('key'));
console.log(table.has('key3'));

table.delete('key2');

console.log(table.has('key2'));

table.add('key3');

console.log(table.size);

table.clear();

console.log(table.size);
