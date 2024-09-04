function findKthLargest(nums, k) {
    function quickSelect(left, right, kSmallest) {
        if (left === right) return nums[left];
        
        // Randomly select a pivot index
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotValue = nums[pivotIndex];
        
        // Move pivot to end
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        
        // Partition the array
        let partitionIndex = partition(left, right, pivotValue);
        
        // The pivot is in its final sorted position
        if (kSmallest === partitionIndex) {
            return nums[kSmallest];
        } else if (kSmallest < partitionIndex) {
            return quickSelect(left, partitionIndex - 1, kSmallest);
        } else {
            return quickSelect(partitionIndex + 1, right, kSmallest);
        }
    }

    function partition(left, right, pivotValue) {
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] < pivotValue) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        // Move pivot to its final place
        [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
        return storeIndex;
    }

    // kth largest is (n - k)th smallest
    return quickSelect(0, nums.length - 1, nums.length - k);
}

// Example usage:
const nums1 = [3, 2, 1, 5, 6, 4], k1 = 2;
const nums2 = [3,2,3,1,2,4,5,5,6], k2 = 4;

console.log(findKthLargest(nums1, k1)); // Output: 5
console.log(findKthLargest(nums2, k2)); // Output: 4
