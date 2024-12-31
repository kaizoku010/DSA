class Node{
    constructor(value){
        this.vaue = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(value){
        this.count++;
        let newNode = new Node(value)

    //let try searching the tree for values 
    const searchTree = node =>{
        if(value < node.left){
            if(!node.left){
                node.left = newNode
            } else searchTree(node.left)
        } 

        if(value > node.right){
            if(!node.right){
                node.right = newNode
            } else searchTree(node.right)
        }
    }

    searchTree(this.root)

    }

    min(){
        let currentNode = this.root
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    max(){
        let currentNode = this.root
        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.value
    }

    contains(value){
        let currentNode = this.root
        while(currentNode){
            if(value === currentNode.value) return true
            
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        
        }

        return false
    }

    //dfsInOrder
    dfsInOrder(){
        let results = []
        const travese = node => {
            if(node.left) travese(node.left)
            results.push(node.value)
            if(node.right) travese(node.right)
        }
        travese(this.root)
        return results
    }

    //PreOrder
    dfsPreOrder(){
        let results = []
        const travese = node =>{
            results.push(node.value)
            if(node.left) travese(node.left)
            if(node.right) travese(node.right)
        }


        travese(this.root)
        return results
    }

    //PostOrder
    dfsPostOrder(){
        let results = []
        const travese = node =>{
            if(node.left) travese(node.left)
            if(node.right) travese(node.right)
            results.push(node.value)
        }
        travese(this.root)
        return results
    }

    breathFirstSearch(){
        let result = []
        let queue = []

        //push the root node to the queue as our first node
        queue.push(this.root)
        //if the queue is not empty
        while(queue.length){

            //remove the first element in the queue, wjich at first is our root node
            let currentNode = queue.shift()
            //add the value of that node to the result array
            result.push(queue.value)

            //if there is a left node..with a value, add it to the queue
            if(currentNode.left){
                //push that left node if found to the queue as well
                queue.push(currentNode.left)
            }
            // do the same as we did with the left nodes and then return the right values
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }


        return result
    }

}

const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)