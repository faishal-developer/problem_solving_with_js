const bnr1="110110101";
const bnr2="0011";

const addBinary=(num1,num2)=>{
    const length1=num1.length, length2=num2.length;
    const max=Math.max(length1,length2);
    let result="",carry='0';

    for(let i=0;i<max;i++){
        const secondIndex=length2-i-1
        if((num1[length1-i-1]==='1'||num2[secondIndex]==='1') && (num1[length1-i-1]==='0'||num2[secondIndex]==='0')){
            if(carry==='1'){
                result='0'+result;
                carry='1'
            }else{
                result='1'+result;
                carry='0'
            }
        }else if((num1[length1-i-1]==='1') && (num2[secondIndex]==='1')){
          
            if(carry==='1'){
                result='1'+result;
                carry='1'
            }else{
                result='0'+result;
                carry='1'
            }
        }else if((num1[length1-i-1]==='0') && (num2[secondIndex]==='0')){
            if(carry==='1'){
                result='1'+result;
                carry='0'
            }else{
                result='0'+result;
                carry='0'
            }
        }else if(!num2[secondIndex]){
            if(carry==='1' && (num1[length1-i-1]==='0')){
                result='1'+result;
                carry='0'
            }if(carry==='1' && (num1[length1-i-1]==='1')){
                result='0'+result;
                carry='1'
            }else{
                result=num1[length1-i-1]+result;
                carry='0'
            }
        }else if(!num1[length1-i-1]){
            if(carry==='1' && (num2[secondIndex]==='0')){
                result='1'+result;
                carry='0'
            }if(carry==='1' && (num2[secondIndex]==='1')){
                result='0'+result;
                carry='1'
            }else{
                result=num2[secondIndex]+result;
                carry='0'
            }
        }
    }
    if(carry==='1'){
        result='1'+result;
    }

    return result;
}


console.log(addBinary(bnr1,bnr2))