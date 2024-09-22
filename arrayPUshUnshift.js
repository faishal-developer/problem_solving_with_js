const arr= new Array(99999).fill(0);

console.time('push');
arr.push(10);
console.timeEnd('push');


console.time('unshift');
arr.unshift(10);
console.timeEnd('unshift');

console.time('push');
arr.unshift(10);
console.timeEnd('push');

console.time('unshift');
arr.unshift(10);
console.timeEnd('unshift');

console.time('push');
arr.unshift(10);
console.timeEnd('push');

