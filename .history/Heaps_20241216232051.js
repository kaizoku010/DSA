class Heap{
    constructor(){
        this.data = []
    }

    getParetIndex(index){
        return Math.floor((i - 1)/2);
    }

    getLeftChildIndex(index){
        return i * 2 + 1;
    }

    getRightChildIndex(index){
        return i * 2 + 2;

    }


    swap(index1, index2){
        const temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2]

    }

}