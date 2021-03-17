//This priority queue is made using binary heaps
class Node{
    constructor(value , priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }

    //insert in queue
    enqueue(value , priority){
        var node = new Node(value , priority)
        this.values.push(node)
        //bubble up
        var index = this.values.length - 1       
        var parent = Math.floor((index -1)/2)
        while(parent >= 0){           
             if(this.values[index].priority > this.values[parent].priority) break
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

    //remove from queue
    dequeue(){
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
            var maxchild = element.priority
            if(leftchild && maxchild > leftchild.priority){
                swapindex = 2*index + 1
                maxchild = leftchild.priority
            }
            if(rightchild && maxchild > rightchild.priority){
                swapindex = 2*index + 2
                maxchild = rightchild.priority
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
        // return MaxElement
    }
}
var queue = new PriorityQueue()
queue.enqueue("Do Homework" , 4)
queue.enqueue("Do Dishes" , 3)
queue.enqueue("Do Work" , 7)
queue.enqueue("Play Valorant" , 1)
queue.enqueue("Dance" , 8)
queue.dequeue()