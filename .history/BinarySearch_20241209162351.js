const recursiveBinarySearch = (array, itemToFind, startNumber, endNumber) => {
    // Base case: if the range is invalid, the item is not in the array
    if (startNumber > endNumber) return false;

    // Calculate the midpoint
    let middleNumber = Math.floor((startNumber + endNumber) / 2);

    // Check if the middle number is the item we're looking for
    if (array[middleNumber] === itemToFind) {
        return true;
    }

    // If the middle number is greater than the item, search in the left half
    if (array[middleNumber] > itemToFind) {
        return recursiveBinarySearch(array, itemToFind, startNumber, middleNumber - 1);
    }

    // If the middle number is less than the item, search in the right half
    return recursiveBinarySearch(array, itemToFind, middleNumber + 1, endNumber);
};

// Test the function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const itemToFind = 3;

if (recursiveBinarySearch(array, itemToFind, 0, array.length - 1)) {
    console.log("The binary search has found your item:", itemToFind);
} else {
    console.log("Sorry, the number wasn't found.");
}

console.log("Binary search on breadth and depth first search using recrusive binary search tree. ")


function bfs(graph)