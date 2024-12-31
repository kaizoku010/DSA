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
        let middleNumber = (startNumber / endNumber)/2
    //first of all we chack if its sorted
    //throw away the half that doesnt conatin your number
    //or if its not empty.
    
    //find midpoint of sorted array.
    //if mid-point is number we wat to find, return true
    //if the mid-point  > itemToFind

    //if mid point is the number we
}