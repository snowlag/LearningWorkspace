class graph{
    constructor(){
        this.adjancencylist = {}
    }

    //Add vertex
    AddVertex(vertex){
     if(!this.adjancencylist[vertex]) this.adjancencylist[vertex] = []
     return this.adjancencylist
    }
    //Add Edge
    AddEdge(keyA , keyB){
        if(this.adjancencylist[keyA] && this.adjancencylist[keyB]){
            this.adjancencylist[keyA].push(keyB)
            this.adjancencylist[keyB].push(keyA)
        }
        console.log(this.adjancencylist)
        return this.adjancencylist
    }
    //Remove edge
    RemoveEdge(keyA , keyB){
        //check if the edge exixts
        if(this.adjancencylist[keyA] && 
            this.adjancencylist[keyB] && 
            this.adjancencylist[keyA].includes(keyB) &&
            this.adjancencylist[keyA].includes(keyB)
            ){
                this.adjancencylist[keyA] = this.adjancencylist[keyA].filter(
                    v => v !== keyB
                );
                this.adjancencylist[keyB] = this.adjancencylist[keyB].filter(
                    v => v !== keyA
                );
        }
        
        return this.adjancencylist
    }

    //Remove vertex
    RemoveVertex(vertex){
        if(this.adjancencylist[vertex]){
            const connections = this.adjancencylist[vertex]
            //Remove all its connection from other vertex
            connections.map(connectedvertex => {
                this.RemoveEdge(vertex , connectedvertex )
            })
            //Remove the vetrex itself
            delete this.adjancencylist[vertex]
        }
        console.log(this.adjancencylist)
        return this.adjancencylist
    }
     
}
 
var Graph = new graph()
