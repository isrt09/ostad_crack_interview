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

