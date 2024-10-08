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

const validditiyCheck=(parenthesis)=>{
    let p_arr=parenthesis.split('');

    let stack=new Stack();

    for (let i = 0; i < p_arr.length; i++) {
        let c= p_arr[i];
        if(c==="(" || c==="{" || c==="["){
            stack.push(c);
        }else{
            if(c===")"){
                if(stack.pop()!=="(")return false;
            }
            else if(c==="}"){
                if(stack.pop()!=="{")return false;
            }else if(c==="]"){
                if(stack.pop()!=="[")return false;
            }
        }
    }
    if(stack.length>0){
        return false;
    }
    return true;
}

console.log(validditiyCheck("({})[]"))