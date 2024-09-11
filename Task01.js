function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Test Output Result
const nums = [-1,0,3,5,9,12], target = 9
console.log(binarySearch(nums,target))

// Space & Time complexity.
To achieve a time complexity of O(log n) for searching a target in a sorted array, we should use the binary search algorithm. Binary search works efficiently on sorted arrays by repeatedly dividing the search interval in half.
This binary search function efficiently finds the target in a sorted array, ensuring that the search operation runs in O(log n) time complexity.
