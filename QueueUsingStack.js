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

class Queue{
    constructor(){
        this.stack1=new Stack();
        this.stack2=new Stack();
    }

    queue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if(this.stack2.length===0){
            for (let i = this.stack1.length-1; i >=0 ; i--) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop();
    }
}

let que= new Queue();
que.queue(1)
que.queue(2)
que.queue(3)
que.queue(4)
que.queue(5)
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
que.queue(8)
console.log(que.dequeue())