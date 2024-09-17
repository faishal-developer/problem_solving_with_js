class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LinkedLists{
    constructor(){
        this.head=null;
        this.length=0;
    }

    addvalue(value){
        const newNode= new Node(value,this.head);
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

    getLength(){
        return this.length;
    }

    removeNode(n){
        if(n>=this.length)return null;

        let current=this.head;
        let currentIndex=0,prevNode=null;

        while (current!==null) {
            
            prevNode=current
            current=current.next;
            currentIndex+=1;
            // console.log(current.value);
            if(currentIndex===n){
                prevNode.next =current.next;
            }
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
list.removeNode(2);
console.log("next version of list");
list.traverse();

console.log("length",list.getLength());
