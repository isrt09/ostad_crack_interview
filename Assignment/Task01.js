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