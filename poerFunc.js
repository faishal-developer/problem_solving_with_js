const findPower=(num,power)=>{
    let value=num*num, current=2;
    const powerDP={
        2:value
    };

    while(true){
        console.log("lk",current);
        let temp=current*2;
        if(temp<power){
            value=value*value;
            powerDP[temp]=value;
            current=temp;
        }else if(current*2===power){
            value=value*value;
            break;
        }else{
            let i=temp;
            while(true){
                i=i/2;
                console.log("kl",i,"=",powerDP[i],"=>",value);
                if(i===1){
                    value=value*num
                    break;
                }
                if((current+i)<power){
                    value=value*powerDP[i];
                    current=current+i;
                }else{
                    continue;
                }
            }
            break;
        }
    }
    return value;
}

console.log(findPower(2,40));