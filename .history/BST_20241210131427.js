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
        //create a new 
        let newNode = new Node(value);
        //first search the tree
        const searchTree = node =>{
            //if value < node.value, go left
            if(value < node.value){

                if(!node.left){
                    node.left = newNode
                } else searchTree(node.left)

            }

            else if(value > node.value){

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
