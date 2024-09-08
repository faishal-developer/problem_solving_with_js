const arr=[5,3,2,4,8,1,7,4]

const sortWithIndex=(arr)=>{
    const newArrWithIndex=arr.map((item,i)=>[item,i]);
    return newArrWithIndex.sort((a,b)=>a[0]-b[0]);
}

const findMaxDistance=(arr)=>{
    const sorted=sortWithIndex(arr),length=arr.length;
    let min=sorted[0][1], maxDistance=0;
    for (let i = 1; i < length; i++) {
        if(min>=sorted[i][1]){
            min = sorted[i][1]
        }else{
            maxDistance=Math.max(maxDistance,(sorted[i][1]-min))
        }
    }
    return maxDistance;
}

console.log(findMaxDistance(arr));