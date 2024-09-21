let arr=new Array(1);
arr[50]=10;

// for (let i = 0; i < arr.length; i++) {
//     arr[i]=0;
    
// }


console.time("unshift")
arr.unshift(5);
console.timeEnd("unshift")

console.time("push")
arr.push(5);
console.timeEnd("push")

console.time("unshift2")
arr.unshift(5);
console.timeEnd("unshift2")

console.time("unshift2")
arr.unshift(5);
console.timeEnd("unshift2")

console.time("push")
arr.push(5);
console.timeEnd("push")



console.log(arr.length);