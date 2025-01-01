class Node{
    constructor(value){
        this.value = value;
        //point to next node
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    // O(1)
    //THE PREPEND FUNCTION IS LIKE OUR INSERT
    prepend(value){
        //we create a new node.
        const node = new Node(value)
        if(this.isEmpty()){
            //if the isEmpty function return true.
            //set our head//we is our first value to the new added node value
            //make new node the head
            this.head = node
        } else {
            //if its not empty, our linkedlist
            node.next = this.head
            //point to new node
            this.head = node
        }
//track the size.
        this.size++
    }

    // O(n)
    append(value){
        //add node at the end of the list 
        
        //create new node
        const newNode = new Node(value);
        //check if list is empty
        if(this.isEmpty()){
        this.head = newNode
        } else {
//get access to last node by creating a tempPointerOfPrevious
let prev = this.head
//while prev.next is not null
while(prev.next){
    //set the previous to point to the next node 
    prev = prev.next
}
//the while loop when it point to null.
prev.next = newNode

        }
        this.size++
    }

print(){
    if(this.isEmpty()){
        console.log("list is empty")

    } else{
        //let tempcurrent point tohead
        let curr = this.head
        //store node values
        let listValues = ""
        //if its not null
        while(curr){
            //et it to current node value
            listValues += `${curr.value} `
            //get access to the next node until it hits null
            curr = curr.next
        }
    //finally log values
        console.log(listValues)
    }
}

removeFrom(index){
    //handle case 1
if(index < 0 || index >= this.size){
    return "out of bounds";
}
//hold refernce of node to be removed
let removeNode
//check if index is 0
if(index === 0){
    //store reference
    removeNode = this.head
    //point to the next node after the node to be removed.
    this.head = this.head.next
}
//the case above is when we have to remove an item at the start of our list
// but what if we want to remove from index > 0
else{
    //lets creare a previousPointer and assign it as our headPointer 
    let prev = this.head
    for(let i = 0; i < index - 1; i++){
        //advance the prev poniter by assiging the it to prev pointer
        prev = prev.next
    }
    //it will exit when it reaches the prev pointer
    //store it
    removeNode = removeNode.next
    //dettach node from the list
    prev.next = removeNode.next
}

//decrement the size since we are removing
this.size--
//then return the value of the removed node.
return removeNode.value

}

//insert at given index = arr[0]
insert(value, index){

    //check if index is less than zero
    if(index < 0 || index > this.size){
    return null   
  }

//   if index is equal to zero, the fist index then call prepend method to handle the inserting while dealing with invalid indexs 
    if(index === 0){
        this.prepend(value)
    } else{
        //create instance
        const node = new Node(value)
        // let the previousPointer = head; 
        let prev = this.head
        //travese and add previousPointer
        for(let i = 0; i < index - 1; i++){
            //point new node to prev pointer
            //advance previous pointer as well
            prev = prev.next
        }
        //make sure to connect the node to the existing list
        node.next = prev.next
        prev.next = node
        this.size++


    }

 

}


   //remove from list given its value
removeValue(value){
    //base case
    if(this.isEmpty()){
        return null
    }

    //if value is equal to head.value
    
    if(this.head.value === value){
        //first node in the list
        this.head = this.head.next
        //keep track of the size
        this.size--
        return value
    } else {
        //lets create a prevPointer to hold the head
        let prev= this.head
        //when the value is not in the list.
        while(prev.next && prev.next.value !== value){
            //advance the pointer
            prev = prev.next
        }
        
        //f there is a node to remove
        if(prev.next){
            //if the value is present, create 
            let removeNode = prev.next
            //let prev next be = removeNode.next
            prev.next = removeNode.next
        
            this.size--
            return value
        }
//if there is no node...return null
        return null
    }

}

//search linked list
contains(value){
    //base case
    if(this.isEmpty()){
        return -1
    }

    //track the index
    let i = 0;
    //lead current node be the head
    let current = this.head
    //while the current node is truthy
    while(current){
        //if the currentNode.value is equal to the value.
        if(curr.value === value){
            //return index
            return i
        }
        //if not increment the index
        //set current temp pointer to be the next node
        current = current.next
        i++
    }

    return -1

}


reverse(){
    //we create a temp pointer to hold the head of the node since a node can
    //  head which holds value a value and a pointer pointing to the next node 
    let curr = this.head
    //we create another temp varible and assign it to null
    let prev = null
//while curr is not nul or trusiy
    while(curr){
        //we create a next varible and reassign curr pointer to next pointer held in the curr pointer, which has 
        // access to the next node as well so we use that
        let next = curr.next
        // we imply switch from curr pointing to the next node and reverse it to point to the previous node 
        //which we asigned as null
    curr.next = prev
    //now we point the entire node to the prev pointer which was now null
    prev = curr
    //since curr is now detached wfrom our head, we simply reassign it to point to the next node if available
    curr = next
    }
    //finally we point the head to the prev which is facig the opposite direction
    this.head = prev
    
}

}

const list = new LinkedList();
console.log("List is empty:", list.isEmpty())
console.log("List size", list.getSize())
list.print()

list.insert(10, 0)
list.print()
list.insert(30, 0)
list.print()
list.insert(20, 1)
list.print()
list.append(40)
list.append(30)
console.log(list.getSize())
console.log(list.removeFrom(0))//remove from index
list.print()
console.log(list.getSize())
list.append(20)
console.log(list.removeValue(10))//remove item by value
list.print()
console.log(list.getSize())
list.reverse()
list.print()


                                                                                                                                                      