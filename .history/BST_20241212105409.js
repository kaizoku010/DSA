class Node{
    constructor(value){
        this.value = value
        this.count = 1
    }
}

class BST{
    constructor(value){
        this.root = value
        this.left = null
        this.right = null
    }

    size(){
        return this.count
    }

    insert(value){
        this.count ++
        let newNode = new Node(value)

        const searchTree = node =>{
            if(value < )


        }
    }
}



const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log("minimune value: ", bst.min())
console.log("size: ", bst.size())
console.log("max: ", bst.max())
console.log("contains 2: ", bst.contains(2))
console.log("contains 9: ", bst.contains(9))
console.log("In Order: ", bst.dfsInOrder())
console.log("Pre Order: ", bst.dfsPreOrder())
console.log("Post Order: ", bst.dfsPostOrder())
console.log("Breadth First Search: ", bst.breathFirstSearch())