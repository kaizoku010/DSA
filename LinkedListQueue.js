const LinkedList = require("./LinkedList.js")

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }


    enqueue(value){
//at the tail of the list added by calling append
this.list.append(value)
    }

    dequeue(){
        this.list.removeFrom(value)
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
        }

    getSize(){
return this.list.getSize()

    }

    print(){
        return this.list.print()
    }
}

const que = new LinkedListQueue()
console.log(que.isEmpty());

que.enqueue(19)
que.enqueue(20)
que.dequeue()