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
        let newNode = new Node(value)

        const SearchTree = node =>{
            if(value < node.left){
                if(!node.left){
                    node.left = new
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
