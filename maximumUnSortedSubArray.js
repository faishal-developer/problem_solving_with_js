const arr=[3,2,1]

const unsortedSubArryFinder=(arr)=>{
    let leftIndex=-1,rightIndex=-1,min=arr[0],max=arr[0],length=arr.length;

    for (let i = 1; i < length; i++) {
        if(arr[i]<arr[i-1]){
            if(leftIndex===-1){
                leftIndex=i-1;
            }else{
                rightIndex=i;
            }
        }
        if(arr[i]<max){
            rightIndex=i;
        }
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }

    for (let i = length-2; i >=0; i--) {
        if((arr[i]>arr[i+1]) && (i<leftIndex)){
            leftIndex=i;
        }else if((arr[i]>min) && (i<leftIndex) ){
            leftIndex=i;
        }
    }
    return [leftIndex,rightIndex];
}

console.log(unsortedSubArryFinder(arr));