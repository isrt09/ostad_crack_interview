function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}

// Test Output
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("codemama", "ostad")); // Output: -1

// Time Complexity:
The indexOf method typically has a time complexity of O(n + m), where n is the length of haystack and m is the length of needle.

// Space Complexity:
The space complexity of this approach is O(1)