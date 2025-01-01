//better acssee to data
//no loops and cycles

class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class NewBst {
    constructor() {
        this.root = null
        this.size = 0
    }

    insert(value) {

        const node = new Node(value)
        //O(nlogn)
        //base case
        if (this.isEmpty()) {
            this.root = node
        }

        const travese = node => {
            if (node.value > value) {
                if (!node.right) {
                    node.rght = node
                } travese(node.right)
            } else if (node.value < value) {
                if (!node.left) {
                    node.left = node
                } travese(node.left)
            }
        }

        travese(this.root)

    }

    search(value) {

        const currentNode = this.root
        //base case
        if (this.isEmpty()) return "no data to work with"
        this.travesal(currentNode, value)
    }

    isEmpty() {
        return this.root === null
    }


    travesal(rootNode, value) {
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            } else if (currentNode.value < value) {
                return travesal(currentNode.left, value)
            } else if (currentNode.value > value) {
                //currentNode.right++
                return travesal(currentNode.right, value)
            }
        }
    }


    dfsPreOrder() {

        //preorder algorithm
        const results = [];

        //base case goes here
        if (this.isEmpty()) {
            return null
        }
        //recursion these oprations all use it.
        const traverse = node => {
            results.push(node)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)

        }

        traverse(this.root)
        return results
    }

    bfs() {
        //arrays lead to higher time complexiteis 
        const results = [], stack = []
        //base case
        if (this.isEmpty()) {
            return null
        }

        stack.push(this.root)

        while (stack.length) {

            let node = stack.shift()
            results.push(node)

            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        //bsf is not recursion - simple loop
        return results

    }

    max(){
        let currentNode = this.root
        //base check
        if(this.isEmpty()){
            return null
        }

        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.value
    }

    min() {
        let currentNode = this.root
//base case
        if(this.isEmpty()){
            return null
        }
//operations
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value

    }


}


const bst = new NewBst()
console.log("Tree is empty", bst.isEmpty());