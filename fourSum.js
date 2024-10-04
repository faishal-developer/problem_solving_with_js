let array=[8,7,6,5,-4,-3,-5,3,2,1,-8,-9,8,2];

const fourSum=(array,target)=>{
    let newArray=[];
    const length=array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++) {
            newArray.push([array[i]+array[j],i,j])
        }
    }
    
    newArray=newArray.sort((a,b)=>a[0]-b[0]);

    const arrayMapping={},newLen=newArray.length,result=[],resultMapper={};

    for (let i = 0; i < newLen; i++) {
        if(arrayMapping[newArray[i][0]]){
            let values=[newArray[i][1],newArray[i][2],arrayMapping[newArray[i][0]][1],arrayMapping[newArray[i][0]][2]];
            values=values.sort((a,b)=>a-b);
            let isInvalid=values[0]===values[1] || values[1]===values[2] || values[1]===values[2] || values[2]===values[3];
            if(!isInvalid){
                result.push(values)
            }
        }else{
            arrayMapping[target-newArray[i][0]]=newArray[i]
        }
    }
    return result;

}

console.log(fourSum(array,0))
