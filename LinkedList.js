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

    reverse(){
        let current=this.head;
        let prev=null;
        while (current!==null) {
            const next=current.next;
            current.next=prev
            prev=current;
            current=next;


            if(current?.next===null){
                this.head=current;
            }
        }
    }

    reverseMtoN(m,n){
        let current=this.head,index=0,first=null,last=null;
        let prev=null;
        while (current!==null) {
            const next=current.next;
            if(index===m-1){
                first=current;
            }
            if(index>=m && index<=n){
                
                current.next=prev
                if(index===n){
                    last=current;
                    first.next=last;
                }
            }
            prev=current;
            current=next;


            if(m===0 && n===this.length-1 && current?.next===null){
                this.head=current;
            }
            index++;
        }
    }

    getLength(){
        return this.length;
    }

    removeDuplicates(){
        let current=this.head;
        let prevNode=null;

        while (current!==null) {
            if(current?.next?.value===current.value){
                prevNode.next =current.next?.next ?? null;
                current=current.next;
            }else{
                prevNode=current
                current=current.next;
            }
            
            if(!current){
                break;
            }
            // console.log(current.value);
            
        }
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
list.addvalue(9);
list.addvalue(9);
list.addvalue(9);
list.addvalue(2);
list.addvalue(9);

list.traverse();
list.removeDuplicates(1,3);
console.log("next version of list");
list.traverse();

console.log("length",list.getLength());

// reverse a linked list

