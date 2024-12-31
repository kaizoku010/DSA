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
        this.count ++
        let newNode = new Node(value);
        
       const searchTree = (node) =>{
        //check if the value is less than the node than set pointer to the left
            if(value < node.value){
                if(!node.left){
                    node.left = newNode
                }
            } else{
                searchTree(node.left)
            }
        //check if the value is greater than the node than set pointer to the right
            if(value > node.value){
                if(!node.right){
                    node.right = newNode
                }
            } else {
                searchTree(node.right)
            }
        }
  
//set the inital node to start searching from the root
        searchTree(this.root)
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
