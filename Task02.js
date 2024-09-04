function merge(nums1, m, nums2, n) {
    // Start from the end of both arrays
    let i = m - 1; 
    let j = n - 1; 
    let k = m + n - 1; 

    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

// Test Output:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
