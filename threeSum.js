const arr=[-1,1,1]

// solve by not using memory
const ThreeSumFunc=(array,target)=>{
    const length=array.length,result=[],resultMapper={};
    
    array=array.sort((a,b)=>a-b);
    for (let i = 0; i < length; i++) {
        let current=array[i],l=i+1,r=length-1;
        while(true){
            if(l>=r){
                break;
            }
            let temp=current+arr[l]+arr[r];
            if(temp>target){
                r=r-1;
            }else if(temp<target){
                l=l+1;
            }else{
                let tempResult=[arr[i],arr[l],arr[r]].sort((a,b)=>b-a)
                let hashValue=tempResult[0]*100+tempResult[1]*10+tempResult[2];
                if(!resultMapper[hashValue]){
                    result.push([arr[i],arr[l],arr[r]])
                    resultMapper[hashValue]=true;
                }
                l=l+1;
                r=r-1;
            }
        }    
    }
    return result;
}

console.log(ThreeSumFunc(arr,0))
