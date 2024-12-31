class HashMap{
constructor(size = 50){
    this.items = new Array(size)
    this.size = size
}



}


const myMap = new HashMap();
myMap.setItem("bk001", "Cracking the interview code");
myMap.setItem("bk002", "Diary of a CEO");
myMap.setItem("bk003", "Shift your mind");

console.log("book results",myMap.getItem("bk003"))

