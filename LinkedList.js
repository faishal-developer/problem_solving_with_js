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
        let current=this.head,index=0,first=null, prevFirst=null;
        let prev=null;
        while (current!==null) {
            const next=current.next;
            if(index===m-1){
                prevFirst=current;
            }if(index===m){
                first=current;
            }
            if(index>m && index<n){
                current.next=prev
                if(index===n){
                    last=current;
                    first.next=last;
                }
            }
            if(index===n){
                
                first.next=current.next;
                if(!prevFirst){
                    this.head=current
                    console.log(prev.value,"---",current.value)
                }
                else {
                    prevFirst.next=current;
                }
                current.next=prev;
            }
            prev=current;
            current=next;

            index++;
        }
    }

    getLength(){
        return this.length;
    }

    removeDuplicatesFNSE(){
        let hashMap={};
        let current1=this.head;
        while (current1!==null) {
            hashMap[current1.value]=hashMap[current1.value] ? hashMap[current1.value]+1 :1;
            current1=current1.next;
        }
        let current=this.head;
        let prevNode=null;

        while (current!=null) {
            if(hashMap[current.value]>=2){
                if(prevNode===null){
                    this.head=current.next
                    current=this.head;
                }else{
                    prevNode.next =current?.next ?? null;
                    current=current.next;
                }
                
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

    // removeMiddleNode
}

const list= new LinkedLists();
list.addvalue(10);

list.addvalue(6);
list.addvalue(5);
list.addvalue(4);
list.addvalue(3);
list.addvalue(2);
list.addvalue(1);

list.traverse();
list.reverseMtoN(3,6);
console.log("next version of list");
list.traverse();

console.log("length",list.getLength());

// reverse a linked list

