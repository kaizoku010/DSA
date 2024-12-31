const array = [1,2,3,4,5,6,7,8,9,10,11]

//binary search search/looks through a structuer and either returns true or false if the element we are looking for is present or found.
// how this is done is first finding the number in the middle of the array. in the this case number 5

//what if the number in the midddle is greater than the number we are looking for ?
//the algorithm will eliminate all numbers greater we are looking depending on if the middle is only greater than the element we are looking for. and vice versa

//find mid point, then remove the half that doesnt contain the result.


//we need to give it a start number and an end number and the array its self
let recursiveBinarySearch =(array,
    itemToFind,
    startNumber,
    endNumber)=>{
        //check that the array is sorted
        //if array is not null
        if(array.length == 0 || startNumber > endNumber) return

        //find mid number
       //use Math.floor() 
        //to avoid floating point numbers
        let middleNumber = Math.floor((startNumber + endNumber) / 2);
        //if middle number is the number we want, it can be an item
        if(array[middleNumber] === itemToFind) return true
        //if the middle point is greater than the number we want to find.
        if(array[middleNumber] > itemToFind)
            return recursiveBinarySearch(array, itemToFind, startNumber, middleNumber-1)
       
        //if mid-point < itemToFind, run it again, but...middle number will be the new start number
        else return recursiveBinarySearch(array, itemToFind, startNumber, middleNumber +1, endNumber)
}

const itemToFind = 3;

if(recursiveBinarySearch(array, itemToFind, 0, array.length - 1)){
    console.log("the binary search has found your item:", itemToFind )
} else {
    console.log("sorry the number wasnt found")
}