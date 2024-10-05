const arr=[3,4,6,2,4,9,7,1,7,8,2,0]

const differenceK=(arr,target)=>{
    const arrayMapping={};
    for (let i = 0; i < arr.length; i++) {
        if(arrayMapping[arr[i]] || arrayMapping[-1*arr[i]]){
            return true;
        }else{
            let next =target - arr[i];
            arrayMapping[next]=i;
        }
    }
    return false
}

console.log(differenceK(arr,20))