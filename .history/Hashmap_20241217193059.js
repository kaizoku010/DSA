

class HashMap{
   constructor(size = 50){
    this.data = new Array(size)
    this.size = null
   }

   hash(key){
    return key.toSring().length % this.size
   }

   setItem(key,value){
    let index = new 


   }
}


const myMap = new HashMap();
myMap.setItem("bk001", "Cracking the interview code");
myMap.setItem("bk002", "Diary of a CEO");
myMap.setItem("bk003", "Shift your mind");

console.log("book results",myMap.getItem("bk003"))

