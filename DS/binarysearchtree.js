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
    //search in binary search tree
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


    remove(value){    
        // search for v
        if(!this.root) {
            return {found : false}
        }
     
    }

    //Breadth first search
    BFSsearch(){
        var queue = [];
        var visited = []
        //push the root node in queue
        queue.push(this.root)
        while(queue.length != 0){
            //pop the first element of queue
            var node = queue.shift()
            visited.push(node)
            //if node has left child push in queue
            if(node.left){
                queue.push(node.left)
            }
            //if node has right child push in queue
            if(node.right){
                queue.push(node.right)
            }
        }
        return visited
    }

    //Depth First Search
    //1) Prooder search
    PreoderSearch(){
        var visited= [];
        const preoder = (node) =>{
            visited.push(node)
            if(node.left){
                preoder(node.left)
            }
            if(node.right){
                preoder(node.right)
            }
        }
        preoder(this.root)
        return visited

    }

    //2) Postoder search 
    PostOderSearch(){
        var visited= [];
        const postoder = (node) =>{
            if(node.left){
                postoder(node.left)
            }
            if(node.right){
                postoder(node.right)
            }
            visited.push(node)
        }
        postoder(this.root)
        return visited
    }

    //3) Inoder Search
    InOderSearch(){
        var visited= [];
        const inoder = (node) =>{
            if(node.left){
                inoder(node.left)
            }
            visited.push(node)
            if(node.right){
                inoder(node.right)
            }
        }
        inoder(this.root)
        return visited
    }

    //








}

class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
 
}




var tree = new BinarySearchTree()
tree.insert(21)
tree.insert(25)
tree.insert(4)
tree.insert(24)
tree.insert(13)
tree.insert(26)
// console.log(tree.BFSsearch())
// console.log(tree.PreoderSearch())
// console.log(tree.PostOderSearch())
// console.log(tree.InOderSearch())


//        21
//   4        25
//     13   24  26
         

//BFS = [21 , 4 , 25 , 13 , 24 , 26]
//Preoder = [21 , 4 , 13 , 25 ,24 ,  26]
//postoder = [13 , 4 , 24 , 26 , 25 , 21]
//InOder = [4 , 13 , 21 , 24 , 25 , 26]