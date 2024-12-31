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
        this.count++
        //create a new node using our node class
        let newNode = new Node(value);

        //first search the tree
        const searchTree = node =>{
            //if value < node.value, go left
            if(value < node.value){
                //if there is no node in the left and the value is less than the node value
                if(!node.left){
                    //let the new left node be the new node
                    node.left = newNode
                } else searchTree(node.left)
            }

            else if(value > node.value){
                    if(!node.right){
                        node.
                    }
            }
        }
    }


    size(){
        return this.count
    }

    min(){
    }

    max(){

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
