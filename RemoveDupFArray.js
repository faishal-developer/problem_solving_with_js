const arr2=[8,9,1,4,2,4,5,6,3,7,8,9,1];
const arr3=[8,9,1,4,2,5,6,3,7]

const trackNumsObj=(arr)=>{
    const tracker={},length=arr.length;
    for (let i = 0; i < length; i++) {
        if(arr[i] in tracker){
            tracker[arr[i]].push(i);
        }else{
            tracker[arr[i]]=[i];
        }
    }
    return tracker;
}

const duplicateRemover=(arr)=>{
    const tracker=trackNumsObj(arr)
    const length=arr.length
    const arr2=[];

    for (let i = 0; i <length; i++) {
        if(arr[i] in tracker){
            arr2.push(arr[i]);
            delete tracker[arr[i]];
        }
    }
    
    return arr2;
}

console.log(duplicateRemover(arr2));






















const arr=[1,1,2,3,3,3,4,5,8,9,9,9]

const removeDup=(arr)=>{
    const length=arr.length;
    let skipped=0,left=0,i=0;
    while ( i < length) {
        if(arr[i]===arr[i-1]){
            for (let j = i; j < length; j++) {
                if(arr[j]===arr[j-1]){
                    i++;
                    skipped++;
                }else{
                    arr[left]=arr[i];
                    left++;
                    i++;
                }
            }
        }else{
            arr[left]=arr[i];
            left++;
            i++;
        }
    }
    arr.length=length-skipped;
}

removeDup(arr);
// console.log(arr);