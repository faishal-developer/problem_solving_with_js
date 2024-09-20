let arr=new Array(99).fill(0);
arr[50]=10;

// for (let i = 0; i < 9999999; i++) {
//     arr[i]=0;
    
// }

console.time("push")
arr.push(5);
console.timeEnd("push")

console.time("unshift")
arr.unshift(5);
console.timeEnd("unshift")

console.log(arr);