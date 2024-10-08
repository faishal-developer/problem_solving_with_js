const arr=[1,3,-1,-3,5,3,7];

const slidingWindow=(arr,length)=>{
    let maxArr=[],result=[];
    for (let i = length-1; i >= 0; i--) {
        if(maxArr.length){
            if(maxArr[maxArr.length-1]<=arr[i])maxArr.push([arr[i],i]);
        }else{
            maxArr.push([arr[i],i]);
        }
    }

    let left=1,right=length;
    for (let i = 0; i < arr.length; i++) {
        left=left+i,right=right+i;
        if(maxArr[maxArr.length-1]>arr[right]){
            
        }
        if(i===maxArr[maxArr.length][[1]]){

        }
    }

}