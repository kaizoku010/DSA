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
            if(value < node.value){
                if(!node.left){
                    node.left = newNode
                } else searchTree(node.left)
            } else if(value > node.value){
                if(!node.right){
                    node.right = newNode
                } else searchTree(node.right)
            }
        }

        searchTree(this.root)
    }

    min(){
        let currentNode = this.root
        while(currentNode){
            if(currentNode.left){
                currentNode = currentNode.left
            }
        }

        return currentNode.value
    }


    max(){
        let currentNode = this.root
        while(currentNode){
            if(currentNode.right){
                currentNode = currentNode.right
            }
        }

        return currentNode;
    }


    //deepth first search 
    //this algorithm has 3 ways to implement it.
    //deepth first search InOrder
    //deepth first search PreOrder
    //deepth first search PostOrder

    dfsInOrder(){
        let results = []

        const traverse = node =>{
            if(node.left) traverse(node.left)
            results.push(node.value)
            if(node.right) traverse(node.right)    
        }
        traverse(this.root)
        return results
    }


    dfsPreOrder(){
        let results = []
        const traverse = node =>{
            results.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)

        } 
        traverse(this.root)
        return results
    }


    dfsPostOrder(){
        let results = []
        const traverse = node =>{
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        results.push(node.value)        
        }

        traverse(this.root)
        return results
    }


    bfs(){
        let results = []
        let queue = []

        queue.push(this.root)

        while(queue.length){
            let currentNode = queue.shift()
            results.push(currentNode)

            if(currentNode.left){
                results.push(currentNode)
            }

            if(currentNode.right){
                queue.push(currentNode)
            }
        }

        return 
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