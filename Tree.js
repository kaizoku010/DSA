//better acssee to data
//no loops and cycles

class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class NewBst{
    constructor(){
        this.root = null
        this.size = 0
    }

    insert(value){

        const node = new Node(value)
            //O(nlogn)
        //base case
        if(this.isEmpty()){
            this.root = node
        }

        const travese = node=>{
            if(node.value > value){
                if(!node.right) {
                    node.rght = node
                } travese(node.right)
            } else if(node.value < value){
                if(!node.left) {
                    node.left = node
                } travese(node.left)
            }
        }

        travese(this.root)

    }

    search(value){

    const currentNode = this.root
    //base case
    if(this.isEmpty()) return "no data to work with"
    this.travesal(currentNode, value)
}

    isEmpty(){
        return this.root === null
    }


    travesal(rootNode, value){
        while(currentNode){
            if(currentNode.value === value){
                return true
            } else if(currentNode.value < value){
               return travesal(currentNode.left, value)
            } else if(currentNode.value > value){
                //currentNode.right++
            return travesal(currentNode.right, value)
            }
        }
    }
}


const bst = new NewBst()
console.log("Tree is empty", bst.isEmpty());