let str="tasmim rahman";
let str2 ="ythadvdahty"

//cabac

const isPalindrome=(string)=>{
    const length=string.length;
    let result=true;

    for(let i=0;i<length/2;i++){
        if(string[i]!==string[length-1-i]){
            result= false
        }
    }

    return result;
}

console.log(isPalindrome(str));