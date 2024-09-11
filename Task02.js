function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    // If the array is not rotated, return the first element
    if (nums[left] < nums[right]) {
        return nums[left];
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if the mid element is the minimum
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        // Check if the mid element is the maximum and the next element is the minimum
        if (mid < nums.length - 1 && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        // Decide which side to go for the minimum element
        if (nums[mid] >= nums[left]) {
            // Left part is sorted, so the minimum must be in the right part
            left = mid + 1;
        } else {
            // Right part is sorted, so the minimum must be in the left part
            right = mid - 1;
        }
    }

    return -1; // This line will never be reached because we always find the minimum
}
// Test Output Result
const nums = [11,13,15,17]
console.log(findMin(nums))

// Space & Time Complexity
To find the minimum element in a sorted and rotated array with a time complexity of O(log n), we can use a modified version of binary search.


