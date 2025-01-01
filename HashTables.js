class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i <key.length; i++){
            //we convert the strg to numeric value
            total += key.charCodeAt(i)
        }
//the index shld be in bounds of the array size
        return total % this.size
    }

    //O(1)
    //hash tables we consider avarage time complexity not worst time complexities 
    // because by having better hashing functions
    set(key, value){
        const index = this.hash(key)
       // this.table[index] = [key, value]
        //avoiding hashing collisions
        const bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key, value]]
        } else {
            const dupKeys = bucket.find(item => item[0]===key)
                if(dupKeys){
                    dupKeys[1] = value
                } else {
                    bucket.push([key, value])
                }
            
        }
    }
//O(1)
    get(key){
        const index = this.hash(key)

      //  return this.table[index]
        const bucket = this.table[index]

        if(bucket){
            const dupKeys = bucket.find(item => item[0]===key)
            if(dupKeys){
                return dupKeys[1]
            }
        }

        return undefined
    
    
    }

    remove(key){
        const index = this.hash(key)
       // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const duplicateItems = bucket.find(item => item[0]===key)
            if(duplicateItems){
                bucket.splice(bucket.indexOf(duplicateItems), 1)
            }
        }
    
    }

    print() {
for(let i = 0; i < table.length; i++){
    if(this.table[i]){
        console.log(i, this.table[i]);
    }
}
    }
}

const table = new HashTable(50)
table.set('name', 'dixon');
table.set('age', 33)
table.print()

console.log(table.get('name'));