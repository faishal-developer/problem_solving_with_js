const arr=[1,2,4,4,4,5,7,-7,-5,-4,-3,-2,-1,0]


const findIndex=(arr,number,left,right,rtIndex)=>{
    let index=-1,length=arr.length;
    while (true) {
            let mid=Math.floor((left+right)/2);
            let midVal=arr[mid];
            if(mid>length-1){
                midVal=arr[mid-length]
                console.log(mid,"=",midVal);
            }
            if(midVal===number){
                    index=mid>length-1 ? mid-length :mid;
            }if(midVal>=number){
                right=mid;
            }else{
                left=mid;
            }

        if(left+1>=right){
            break;
        }

    }

    return index;
}


const findRotationIndex=(arr)=>{
    let left=0 , right=arr.length-1,index=-1;
    while (true) {
        // console.log("left=",left,'right=',right);
        if(left+1>=right){
            index=left+1;
            break;
        }else{
            let mid=Math.floor((left+right)/2);
            if(arr[mid]<arr[left]){
                right=mid;
            }else{
                left=mid;
            }
        }

    }

    return index;
}

const findIndexFromRotatedArray=(arr)=>{
    const rtIndex=findRotationIndex(arr);
    const index = findIndex(arr,-7,rtIndex,rtIndex+arr.length-1,rtIndex)
    return index
}

console.log(findIndexFromRotatedArray(arr));