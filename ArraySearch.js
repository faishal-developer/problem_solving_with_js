const arr=[1,2,4,4,4,5,7,7]

const findLeftMostIndex=(arr,number,i)=>{
    let index=i;
    while(true){
        if(arr[index-1]===number){
            index=index-1;
        }else{0
            break;
        }
    }
    return index;
}

const findIndex=(arr,number)=>{
    let left=0 , right=arr.length-1,index=-1;

    while (true) {
        console.log("left=",left,'right=',right);
        if(left+1>=right){
            index=left+1;
            break;
        }
        if(arr[left]===number){
            index=findLeftMostIndex(arr,number,left)
            break;
        }else if(arr[right]===number){
            index=findLeftMostIndex(arr,number,right)
            break;
        }else{
            let mid=Math.floor((left+right)/2);
            if(arr[mid]>=number){
                right=mid;
            }else{
                left=mid;
            }
        }

    }

    return index;
}


console.log(findIndex(arr,4));