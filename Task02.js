function removeDuplicates(s) {
    const stack = [];

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove the last character because it's a duplicate
        } else {
            stack.push(char); // Add the current character to the stack
        }
    }

    return stack.join(''); // Convert the stack to a string
}

// Test Output
const x = "abbaca";
const y = "azxxzy";

console.log(removeDuplicates(x));
console.log(removeDuplicates(y));

// Time and Space Complexity:
Time Complexity: O(n), where n is the length of the string. Each character is processed once and each stack operation (push or pop) is O(1). Thus, the overall time complexity is linear.
Space Complexity: O(n), where n is the length of the string. In the worst case, all characters might be pushed onto the stack if no adjacent duplicates are present. Therefore, the space complexity is linear with respect to the size of the input string.