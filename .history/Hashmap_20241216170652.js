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
    
        
    
    }
}