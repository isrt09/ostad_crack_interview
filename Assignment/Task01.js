function isPalindrome(s) {
    // if length is 0 or 1, it's a palindrome
    if (s.length === 0 || s.length === 1) {
        return true;
    }    
    // Check first and last character
    if (s[0] === s[s.length - 1]) {
        // Recursively check substring excluding first and last character
        return isPalindrome(s.slice(1, -1));
    } else {
        // If first and last characters don't match, it's not a palindrome
        return false;
    }
}

// Test Output:
console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("adam"));   // Output: true
console.log(isPalindrome("tenet"));  // Output: false

Time Complexity:
The time complexity of this recursive solution is O(n), where n is the length of the string s. This is because the function checks each character of the string once in each recursive call until the base case is reached.

Space Complexity:
The space complexity is O(n) as well. This is due to the recursion stack space used by the function calls. In the worst case, the recursion depth could go up to n/2, as we are slicing off the first and last characters in each recursive call.