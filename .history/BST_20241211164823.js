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
                } else 
            }
        }


    }

}