function multiply(a, b) {
    //  if b is 0, return 0
    if (b === 0) {
        return 0;
    }
    // Recursive case: add a to the result of multiply(a, b-1)
    return a + multiply(a, b - 1);
}
// Test Output
console.log(multiply(4, 5));  // Output: 20
console.log(multiply(3, 3));  // Output: 30
console.log(multiply(0, 2));  // Output: 56

Time Complexity:
The time complexity of this recursive solution is O(b), where b is the value of the second integer. This is because the function recursively adds a b times.

Space Complexity:
The space complexity is O(b) due to the recursion stack used by the function calls. In the worst case, the recursion depth could go up to b.