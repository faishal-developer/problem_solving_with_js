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
        this.tail=null;
    }

    addvalue(value){
        
        const newNode= new Node(value,this.head);
        if(this.head===null){
            this.tail=newNode;
        }
        this.head=newNode;
        this.length= this.length+1;
        this.tail.next=this.head;
        
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

    cycleDetection(){
        let hare=this.head,tortoise=this.head,i=0;

        while (hare!==null) {
            hare=hare.next;
            hare=hare.next;
            tortoise=tortoise.next;
            if(hare===tortoise){
                hare=this.head;
                while(tortoise!==null){
                    hare=hare.next;
                    tortoise=tortoise.next;
                    if(hare===tortoise){
                        return i;
                    }
                    i++;
                }
            }
        }
        return false
    }
}

const list= new LinkedLists();
list.addvalue(10);
list.addvalue(9);
list.addvalue(8);
list.addvalue(7);
list.addvalue(6);
list.addvalue(1);
// list.traverse();
// list.removeNode(2);
console.log(list.cycleDetection())
console.log("next version of list");
// list.traverse();

console.log("length",list.getLength());
