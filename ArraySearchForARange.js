const arr=[1,2,4,4,4,5,7,7,-5,-4,-3,-2,-1,0]


const findIndex=(arr,number,left,right,from)=>{
    let leftIndex=-1,rightIndex=-1;

    while (true) {
        console.log("left=",left,"right=",right);
        if(left+1>=right){
            if(arr[left+1]===number){
                leftIndex=left+1;
            }if(arr[right-1]===number){
                rightIndex=right-1
            }
            break;
        }
        else{
            let mid=Math.floor((left+right)/2);
            if(arr[mid]>number){
                right=mid;
            }else if(arr[mid]<number){
                left=mid;
            }else{
               
                if(from==="left" || !from){
                    let findLeft=findIndex(arr,number,left,mid-1,'left');
                    leftIndex=findLeft[0]===-1?mid:findLeft[0]
                }
                if(from==='right' || !from){
                    let findRight=findIndex(arr,number,mid+1,right,'right');
                    rightIndex=findRight[1]===-1?mid:findRight[1]
                }
                break;
            }
        }

    }

    return [leftIndex,rightIndex];
}


console.log(findIndex(arr,4,0,arr.length-1));