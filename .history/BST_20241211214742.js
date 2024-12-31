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

        return results
    }

    breathFirstSearch(){
        let result = []
        let queue = []

        queue.push(this.root)
        while(queue.length){
            let currentNode = queue.shift()
            result.push(queue.value)

            if()
        }
    }

}