class Node{
    constructor(value,next,prev){
        this.value=value;
        this.next=next;
        this.prev=prev
    }
}

class LinkedLists{
    constructor(){
        this.head=null;
        this.length=0;
    }

    addvalue(value){
        const newNode= new Node(value,this.head,null);
        if(this.head!==null){
            this.head.prev=newNode;
        }
        this.head=newNode;
        this.length= this.length+1;
    }

    traverse(){
        let current=this.head;
        while (current!==null) {
            console.log(current.value);
            current=current.next;
        }
    }
}

const list= new LinkedLists();
list.addvalue(10);
list.addvalue(9);
list.addvalue(8);
list.addvalue(7);
list.addvalue(6);
list.addvalue(1);
list.traverse();
console.log("next version of list");
list.traverse();

