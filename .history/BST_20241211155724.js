class Node{
    constructor(value){
        this.value = value;
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
        this.count ++
        let newNode = new Node(value);

        const searchTree = node =>{
            if(value === node.value){
                return "item exits"
            }

            if(value < node.left){
                if(!node.left){
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            }

            if(value > node.right){
                if(!node.right){
                    node.right = new Node(value);
                } else {
                    searchTree(node.right)
                }
            }
        }


        searchTree(this.root)

    }

    min(){

        let currentNode  = this.root
        while(currentNode){
            if(currentNode < currentNode.left){
                currentNode = currentNode.left
            }
        }

        return currentNode


    }

    max(){

        let currentNode = his.root

    }

    contains(){

    }
}