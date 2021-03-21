class HashTable{
    constructor(size = 53){
        this.keymap = new Array(size);
        this.prime = 13
    }
    //Hash function
    _hash(key){
        var total = 0
        for(var i = 0 ; i < Math.min(key.length , 100) ; i++){
            let value = key.charCodeAt(0) - 96
            total = (total * this.prime + value) % this.keymap.length;
        }
        return total 
    }

    //set method by seperate chaining
    set(key , value){
        const index = this._hash(key)   
        if(!this.keymap[index]){
            this.keymap[index] = new Array([key , value])
        }else{
            this.keymap[index].push([key , value])
        }
        // console.log(this.keymap[index])
        // console.log(this.keymap[index])
        return this.keymap[index]
    }
    //get method by seperate chaining
    get(key){
        const index = this._hash(key)
        if(!this.keymap[index]) return undefined
        if(this.keymap[index].length == 1) return this.keymap[index]
        var foundindex = 0
        for (let item in this.keymap[index]){
            if(item[0] == key) return this.keymap[index][foundindex]
            foundindex++
        }
        return undefined   
    }

    //Return all the keys
    keys(){
        // console.log(this.keymap)
        var keys = []
        this.keymap.map(collection => {
          console.log(collection)
          collection.map(item => {
              console.log(item)
              if(!keys.includes(item[0])){
                  keys.push(item[0])
              }
          })
        
        })
        console.log(keys)
        return keys
    }


       
}


var Table =new HashTable()
Table.set("Name" , "Ankit")
Table.set("Gender" , "Male")
Table.set("Name", "Rahul")
Table.keys()