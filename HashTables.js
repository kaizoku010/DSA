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

    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)

        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
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