// // sorted array
// let arr = [
//   3, 4, 6, 9, 12, 16, 19, 20, 25, 30, 45, 56, 78, 89, 100, 120, 130, 180, 200,
// ];

// // 1.loop
// // 2. recursion

// const binarySearch = (arr2, target) => {
//   let left = 0,
//     right = arr2.length-1;
//   while (left < right) {
//     let mid = parseInt((left + right) / 2);
//     console.log(mid,"mid",right,"right",left,"left");
//     if (arr2[mid] === target) {
//       console.log("index=", mid);
//       break;
//     } else if (arr2[mid] > target) {
//       right = mid-1;
//     } else {
//       left = mid+1;
//     }
//   }
// };


// binarySearch(arr, 131);


// bubble sort
const array2=[8,7,6,4,3,2,1,0,-1,-2,-3,-4,-5];

const bubbleSort=(arr)=>{
  let step_count=0;
  let arr_length=arr.length;
  for (let i = 0; i < arr_length; i++) {
    let isChanged=0;
    for (let j = 0; j < arr_length-i-1; j++) {
      step_count++;
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1] =temp;
        isChanged++;
      };
    }
    if(isChanged==0){
      break;
    }
  }
  console.log(step_count);
  return arr;
}

console.log(bubbleSort(array2));
