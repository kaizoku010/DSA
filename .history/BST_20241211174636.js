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
            if(!node)
        }
    }

    }
}