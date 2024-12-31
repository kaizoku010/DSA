class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null 
    }
}


class BST{
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }


    insert(value){
        this.count ++
        let newNode = new Node(value);

        //first search the tree by passing in a node, this is a recursive funtion
        const searchTree= (node)=>{
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

        return searchTree(this.root)


    }

    min(){
        //first of all first get the currentnode we are on
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

        return currentNode.right
    }

    size(){
        this.count
    }

    contains(value){
        let currentNode = 
    }

}