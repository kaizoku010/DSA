class HashMap{

    constructor(size = 50){
        this.buckets = new Array(size);
        this.size = size
    }

    hash(key){
        return key.toString().length % this.size
    }

    setItem(key, value){
        let index = this.hash(key)
    
        if(!this.buckets[index]){
                this.buckets[index] = [];
        } 

        this.buckets[index].push([key, value])
    }

    getItem(key){
        let index = this.hash(key)

        if(!this.buckets[index]) return null

        for(let i of this.buckets[index]){
            if(i[0] === key) return i[1]
        }
    }
}


const 