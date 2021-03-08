class BinarySearchTree {
    constructor(){
        this.root = null
    }
    //insert in binary search tree
    insert(value){
        var newNode = new Node(value)
        if(!this.root) {
            this.root = newNode 
            return  this
        }else{
            var current = this.root
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode
                        return this;
                    }
                    current = current.left;
                }else{
                    if(!current.right){
                        current.right = newNode
                        return this;
                    }
                    current = current.right;
                }
            }   
        }
    }
    //search in binary tree
    search(value){
        if(!this.root) {
            return {found : false}
        }
        var current = this.root
        while(true){
            if(value == current.value){
                return {found : true , node : current}
            }else if(value < current.value){
                if(!current.left){
                    return {found : false}
                }
                current = current.left           
            }else{
                if(!current.right){
                    return {found : false}
                }
                current = current.right
            }
        }
    }

    //Remove from binary search tree
    remove(value){
        
    }


}

class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
 
}

var tree = new BinarySearchTree()


