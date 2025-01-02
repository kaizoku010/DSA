function bubbleSort(arr){
//sort in ascending order 
//1,2,3,4,6,7,8...
//if arr = 8,3,1,2,4,5,6,7
    let swapped
    //base case 
    if(!arr) return null

do{
    swapped = false
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            //reasign it after saving it in our temp variable
            arr[i] = arr[i + 1]
            arr[i +1] = temp
            swapped = true
        }
    }
} while(swapped)


}