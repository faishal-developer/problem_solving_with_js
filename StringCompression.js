const str='aaabbbbbccccdddd';

const stringCompresser=(str)=>{
    const length= str.length;
    let resultStr='',counter=[str[0],1];
    for (let i = 1; i < length; i++) {
        let temp=str[i];
        if(temp===counter[0]){
            counter[1]=counter[1]+1;
        }else{
            resultStr+=`${counter[0]}${counter[1]}`;
            counter=[temp,1];
        }
    }
    resultStr+=`${counter[0]}${counter[1]}`
    return resultStr;
}

console.log(stringCompresser(str));