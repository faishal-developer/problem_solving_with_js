const str="abcdefghijkl";

const reverseString=(str)=>{
    str=str.split('');
    const length=str.length;
    for (let i = 0; i < length/2; i++) {
        let current = str[i];
        str[i]=str[length-1-i];
        str[length-1-i]=current;
    }
    return str.join('');
}

console.log(reverseString(str));