class Heap{
    constructor(){
        this.data = []
    }

    getParetIndex(index){
        return Math.floor((index - 1)/2);
    }

    getLeftChildIndex(index){
        return index * 2 + 1;
    }

    getRightChildIndex(index){
        return index * 2 + 2;

    }


    swap(index1, index2){
        const temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp

    }

    push(key){
        this.data[this.data.length] = key;
        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex = this.data.length - 1;

        while(this.data[currentIndex] > this.data)
    }

}