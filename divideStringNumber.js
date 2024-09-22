const num="129"
const num2='2';

const divideWith2=(divident)=>{
    let length=divident.length;
    let result='',carry=0;
    for(let i=0;i<length;i++){
        if(divident[i]==='0'){
            if(carry){
                result=result+((carry/2).toString());
                carry=0;
            }else{

                result=result+'0';
            }
        }else if(divident[i]==='1'){
            if(carry){
                let num = carry+1;
                result=result+Math.floor(num/2);
                carry=10;
            }else{
                carry=10
            }
        }else{
            let num=Number(divident[i]);
            if(carry===10){
                num=carry+num;
            }
            carry=num%2*10;
            let tempresult=Math.floor(num/2);
            result=result+tempresult.toString();

        }
    }
    return [result,carry];
}


const isPowerOf2=(numString)=>{
    while(numString!=='1'){
        const result = divideWith2(numString);
        if(result[1]!==0){
            console.log(result[1],numString);
            return false;
            break;
        }
        numString=result[0];
    }
    return true;
}

console.log(isPowerOf2(num))
