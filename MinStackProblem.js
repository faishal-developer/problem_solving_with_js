class Stack{
    constructor(){
        this.stack = [];
        this.minStack=[];
        this._length=0;
    }

    push(value){
        this.stack.push(value);
        this._length+=1;
        if(this.minStack.length===0){
            this.minStack.push([value,this._length])
        }else if(this.minStack[this.minStack.length-1][0]>value){
            this.minStack.push([value,this._length])
        }
    }

    pop(){
        if(this._length===this.minStack[this.minStack.length-1][1]){
            this.minStack.pop();
        }
        this._length-=1;
        return this.stack.pop();
    }

    top(){
        return this.stack[this._length-1];
    }

    get length(){
        return this._length;
    }

    getMin(){
        return this.minStack[this.minStack.length-1][0]
    }
}

let stack= new Stack();

stack.push(7);
stack.push(8);
stack.push(9);
stack.push(1);
stack.push(0);
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop()
console.log(stack.getMin());            
