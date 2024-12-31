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
                if(!)
            }
        }


    }

    min(){


    }

    max(){

    }

    contains(){

    }
}