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


    }
}