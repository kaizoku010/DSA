//sliding window algorithm,

function twoSum(arr, target){
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let pair = null;

    while(leftPointer != rightPointer ){

        let pairSum = arr[leftPointer] + arr[rightPointer]
        
        if(pairSum === target){
        
            pair = [arr[leftPointer], arr[rightPointer]]
            break
        
        } else if(pairSum < target){
            leftPointer++
        
        } else if(pairSum > target){
            rightPointer--
        }
    }

    return pair

}

console.log(twoSum([1,2,3,4,5], 7))//[2,5]
