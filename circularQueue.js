class CircularQueue{
    constructor(size){
        this.items = new Array(size)
        this.size = size
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.size
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
        this.rear = this.rear + 1
        this.items[this.rear] = value
           this.currentLength += 1 
           if(this.front === -1){
            this.front = this.rear
           }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        const item = this.items[this.front]
        this.items[this.front] = null

        this.front = (this.front + 1) % this.size
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
    }


    peek(){
        if(!this.currentLength == 0) return null
        else console.log(this.items[0])
    }

    print(){
        if(this.isEmpty()){
            console.log(`is empty`)
        } else {
            let i
            let str =""
                for( i = this.front; i !== this.rear; i = (i + 1) % this.size) {
                    str += this.items[i] + ""
                } 
                str += this.items[i]
                console.log(str)
        }
    }
}

const ccQ = new CircularQueue(5)
console.log(ccQ.isEmpty())