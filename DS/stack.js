class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    //Push the node at start of list
    push(val){
        if(!this.first){
            this.first = this.last = new Node(val)
        }else{
            var temp = this.first
            this.first = new Node(val)
            this.first.next = temp
        }
        this.size +=1
        return this.size

    }
    //Pop the first node of list
    pop(value){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
