function bubbleSort(arr){

//sort in ascending order 
//1,2,3,4,6,7,8...
//if arr = 8,3,1,2,4,5,6,7
//this will determine if we need more sorting or not
let swapped
//basecase
if(!arr) return null
do{
swapped = false
//O(s) linear time
for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i + 1]){
        let temp = arr[i]
        //reassgn after swapping
        arr[i] = arr[i + 1]
        //do the swap
        arr[i + 1] = temp
        swapped = true
    }
}
} while(swapped)

}