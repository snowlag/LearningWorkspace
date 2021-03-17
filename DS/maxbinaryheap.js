class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    //insert the value in heap
    insert(value){
        //push the value at end of list
        this.values.push(value)
        //bubble to right spot
        var index = this.values.length - 1       
        var parent = Math.floor((index -1)/2)
        while(parent >= 0){           
             if(this.values[index] < this.values[parent]) break
             //bubble up
             //swap the child to parent
             var temp = this.values[index]
             this.values[index] = this.values[parent]
             this.values[parent] = temp
             //update index
             index = parent
             parent = Math.floor((index -1)/2)
        }
        return this.values
    }
    
    //Extract max
    extractmax(){
        var MaxElement = this.values[0]
        //make last vale as root
        var element = this.values[0] = this.values.pop()
        //bubble down
        var index = 0
        while(true){
            var leftchild = this.values[2*index + 1]
            var rightchild = this.values[2*index + 2]
            //If left node and right node does not exists
            if(!leftchild && !rightchild) break;
            var swapindex = index
            var maxchild = element
            if(leftchild && maxchild < leftchild){
                swapindex = 2*index + 1
                maxchild = leftchild
            }
            if(rightchild && maxchild < rightchild){
                swapindex = 2*index + 2
                maxchild = rightchild
            }
            //If swap is index not changed means left and right node are smaller
            if(index == swapindex) break
            //swap if found with new swap index
            var temp = this.values[index]
            this.values[index] = this.values[swapindex]
            this.values[swapindex] = temp
            index = swapindex
        }
        return this.values

    }


}
var heap = new MaxBinaryHeap()
heap.insert(44)
heap.insert(56)
heap.insert(43)
heap.insert(26)
heap.insert(76)
heap.insert(11)
heap.extractmax()

