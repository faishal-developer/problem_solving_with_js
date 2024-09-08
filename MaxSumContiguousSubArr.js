const arr=[3,-1,-1,5,2,-1,-4,10];

const FindMaxSumCont=(arr)=>{
    let sum =arr[0],tempSum=arr[0],length=arr.length;
    for (let i = 1; i < length; i++) {
        if((tempSum+arr[i])>arr[i]){
            tempSum=tempSum+arr[i];
            console.log("tempSum=",tempSum);
        }else{
            tempSum=arr[i]
        }
        if(tempSum>sum){
            sum=tempSum
        }
    }
    return sum;
}

console.log(FindMaxSumCont(arr));