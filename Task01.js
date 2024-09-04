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

// Space & Time Complexity:

A heap is a binary tree where the parent nodes follow a specific order relative to their children. For a Min-Heap, the smallest element is always at the root. This property allows us to efficiently keep track of the k largest elements with a space complexity of O(k)

Building the heap takes O(n) time and each insertion and deletion operation takes O(logk) time. Since we're maintaining a heap of size k, the time complexity for inserting all elements into the heap is O(nlogk), which is efficient given the constraints.