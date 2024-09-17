

const isSubstring=(str1,str2)=>{
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    const length1=str1.length,length2=str2.length;
    let str2Hash=0,str1Hash=0,base=26,biggest=99999999,basePower=1;
    for (let i = 0; i < length2; i++) {
        let current= (str2[i].charCodeAt()-96);
        str2Hash=(str2Hash*base+current);
        str2Hash=str2Hash%biggest;
        if(i<length2-1){
            basePower=(basePower*base)%biggest;
        }
    }

    for (let i = 0; i < length1; i++) {
        let current= (str1[i].charCodeAt()-96);
        if(i>=length2){
            const removedChar=str1[i-length2].charCodeAt()-96;
            console.log(str1Hash,"---------",(removedChar*basePower)%biggest,((str1Hash-(removedChar*basePower)%biggest)+biggest));
            str1Hash=((str1Hash-(removedChar*basePower)%biggest)+biggest)%biggest;
        }
            str1Hash=str1Hash*base+current;
            str1Hash=str1Hash%biggest;
            console.log(str1Hash,"2->",str2Hash);
        if(str1Hash===str2Hash){
            console.log(str1Hash,'gggggggg');
            if(str1.slice(i-length2+1,i+1)===str2){
                return true
            }
        }
        if(!str1Hash){
            break;
        }
    }

    return false;
}

const str1="abaabc";
const str2="baaba";

const isRotated=(str1,str2)=>{
    const l1=str1.length, l2= str2.length;
    if(l1!== l2){
        return false 
    }
    str1=str1+str1;
    // console.log(str1,isSubstring(str1,str2));
    if(isSubstring(str1,str2)){
        return true;
    }
    return false
}

console.log(isRotated(str1,str2));

