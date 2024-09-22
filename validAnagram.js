const str1="abcdab"
const str2="aabbcd"
const isAnagram=(str,str2)=>{
    let length1=str.length, length2=str2.length;
    if(length1!==length2){
        return false
    }
    let str1mapping={};
    let str2mapping={};

    for (let i = 0; i < length1; i++) {
        str1mapping[str1[i]]=str1mapping[str1[i]]?str1mapping[str1[i]]+1 :1;
        str2mapping[str2[i]]=str2mapping[str2[i]]?str2mapping[str2[i]]+1 :1;
    }

    for (key in str1mapping) {
        if(str1mapping[key]!==str2mapping[key]){
            return false
        }
    }
    return true;
}

console.log(isAnagram(str1,str2));