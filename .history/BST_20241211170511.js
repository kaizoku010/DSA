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


    size(){
        return this.count
    }

    insert(value){

        this.count ++
        let newNode = new Node(value)

        //search the tree
        const searchTree=(node)=>{

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
        return currentNode
    }


    max(){

        let currentNode = this.root
        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode
    }


    contains(value){
        let currentNode = this.root

        while(currentNode.left){
            if(value === currentNode.value){
                return true
            }

            if(value < currentNode.value){
                currentNode = currentNode.left
            }

            if(value > currentNode.value){
                currentNode = currentNode.left
            }


        }
    }

}