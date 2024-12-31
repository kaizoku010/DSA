class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }



    insert(value){
        //now we can create this anytime
        this.count ++
        let newNode = new Node(value)

        const SearchTree = node =>{
            if (value < node.left){
                if(!node.left){
                    node.left = newNode
                } else SearchTree(node.left)
            }

            if (value > node.right){
                if(!node.right){
                    node.right = newNode
                } else SearchTree(node.right)
            }
        }

        SearchTree(this.root)
    }


    size(){
        return this.count
    }

    min(){

        //set the current node to be the root node first
        let currentNode = this.root
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value


    }

    max(){

        let currentNode = this.root
        while(currentNode.right){}
        
     
    }

    conatins(){

    }

    dfsInOrder(){

    }

    dfsPostOrder(){

    }


    dfsPreOrder(){

    }


    bfs(){

    }   
}
