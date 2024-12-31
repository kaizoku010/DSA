class HashMap{
constructor(size = 50){
    this.items = new Array(size)
    this.size = size
}

 hash(key){
    return key.toString().length % this.size
 }

 setItem(key, value){
    let index = this.hash(key)

    if(!this.items[index]){
        this.items[index] = []
    }

    this.
 }

}


const myMap = new HashMap();
myMap.setItem("bk001", "Cracking the interview code");
myMap.setItem("bk002", "Diary of a CEO");
myMap.setItem("bk003", "Shift your mind");

console.log("book results",myMap.getItem("bk003"))

