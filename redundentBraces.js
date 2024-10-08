class Stack{
    constructor(){
        this.stack = [];
        this._length=0;
    }

    push(value){
        this.stack.push(value);
        this._length+=1;
    }

    pop(){
        this._length-=1;
        return this.stack.pop();
    }

    top(){
        return this.stack[this._length-1];
    }

    get length(){
        return this._length;
    }
}

const redundentBraces=(parenthesis)=>{
    let p_arr=parenthesis.split('');

    let stack=new Stack(),isExtra=false,count=0;

    for (let i = 0; i < p_arr.length; i++) {
        let c= p_arr[i];
        if(c==="(" || c==="{" || c==="["){
            count+=1;
            isExtra=true;
            stack.push(c);
        }else if((c===")" || c==="}" || c==="]")){
            if(count!==0 && stack.length===0){
                console.log(count,stack.length)
                return true;
            }
            if(c===")"){
                if(stack.pop()!=="(")return "invalid parenthesis";
            }
            else if(c==="}"){
                if(stack.pop()!=="{")return "invalid parenthesis";
            }else if(c==="]"){
                if(stack.pop()!=="[")return "invalid parenthesis";
            }
            isExtra=true;
        }else if((c==="+" || c==="-" || c==="*" || c==="/" || c==="%")){
            if(isExtra===true){
                count-=1;
            }
            isExtra=false;
        }
    }
    if(stack.length>0){
        console.log("kdfjkdfj");
        return true;
    }
    return false;
}

console.log(redundentBraces("((b+c)+c)"))