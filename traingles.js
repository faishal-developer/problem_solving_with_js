const traingles=[1,5,7,2,3,7,4,3];

const coutTraingles=(arr)=>{
    arr=arr.sort((a,b)=>a-b);
    let result=0,len=arr.length;
    for (let i = 0; i < len-2; i++) {
        let c=arr[i];
        let j=i+1, k=i+1;

        while (j<len-1) {
            let b=arr[j],two_side=c+b;
            while(k<len){
                if(arr[k]>=two_side){
                    break;
                }
                k=k+1;
            }
            result+=k-j-1;
            j=j+1
        }
    }
    return result;
}

console.log(coutTraingles(traingles));