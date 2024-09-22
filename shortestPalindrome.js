const str = 'abbc';
const str2= 'abba';
const str3='abcdcbafgh';
const str4 = 'abcdedcfagh'


const shortestPalindrom=(str)=>{
    let shortest=0,length=str.length,steps=0;

    for (let i = 0; i < str.length; i++) {
        if(str[0]===str[length-i-1]){
            for (let j = 1; j < length; j++) {
                let k= length-i-j-1;
                console.log(str[j],str[k]);
                if(j>=(k)){
                    return shortest
                }else if(str[j]!==str[k]){
                    shortest++;
                    break;
                }
                console.log(steps++)
            }
        }else{
            shortest++;
            console.log(steps++)
        }
    }

    return shortest;
}

console.log(shortestPalindrom(str4))
