//given an array of unsorted numbers,
//find all unique triplets in it that add up to zero.

function tripletdToZero(arr){
    arr.sort((a, b)=> a-b)

    const triplets = []

    for(let i = 0; i < arr.length; i++){
        //take the negative of the array[i] as a target sum
        let target = -arr[i]

        //get rid of duplicates

        if(i > 0 && arr[i] === arr[i-1]){
            continue
        }

        searchPair(arr, target, i + 1, triplets)    
    }
    return triplets
}

function searchPair(arr, target, leftPointer, triplets){
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer){
        const currentSum = arr[leftPointer] + arr[rightPointer]

        if(currentSum === target){
            triplets.push([-target, arr[leftPointer], arr[rightPointer]])
            leftPointer++
            rightPointer--
            while( leftPointer <rightPointer && arr[leftPointer] === arr[leftPointer - 1]){
                leftPointer++
            }
            while(leftPointer < rightPointer && arr[rightPointer]===arr[rightPointer + 1]){
                rightPointer--
            }
        } else if(target > currentSum){
            leftPointer++

        }else if(target < currentSum){
            rightPointer--
        }
    }

}

console.log(tripletdToZero([-3,0,1,2,-1,1,-2]))
console.log(tripletdToZero([-5,2,-1,-2,3]))