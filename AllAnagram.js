let s="cbacebabacd";
let s2="abc";

const findAllAnagram=(s1,s2)=>{
    let length1=s1.length, length2=s2.length,s2mapping={},result=[];
    for (let i = 0; i < length2; i++) {
        let c =s2[i];
        s2mapping[c]=s2mapping[c]? s2mapping[c]+1 :1
    }

    let total=0,s1mapping={},l=0,r=0;

    for (let i = 0; i < length1; i++) {
        let c= s1[i];
        if(s2mapping[c]){
            
            let temp= s1mapping[c]?.value;
            if(temp){
                if(temp+1>s2mapping[c]){
                    if(s1[l]===c){
                        l=l+1;
                    }else{
                        // total=total-temp.position+l;
                        // l=temp.position;
                        // s1mapping[c]={value:s1mapping[c]-1,position:i};
                        l=l+1;
                        i=l;
                        total=0
                        s1mapping={}
                    }
                    
                }
                
            }else{
                if(total===0){
                    l=i
                }
                total=total+1;
                s1mapping[c]={value:1,position:i};
                console.log(total,"-",l,"-",i,"-",s1mapping);
                if(total===length2){
                    result.push(l);
                    i=l;
                    l=l+1;
                    total=0;
                    s1mapping={};
                }
                
            }
        }else{
            l=i+1;
            total=0;
            s1mapping={}
        }

        
    }

    return result;

}


console.log(findAllAnagram(s,s2));
