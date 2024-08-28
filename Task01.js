function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (['(', '{', '['].includes(char)) {            
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false; 
            }
        }
    }
    
    return stack.length === 0;
}
// Test Output
const s = "()";
const a = "()[]{}";
const b = "(]";

console.log(isValid(s));
console.log(isValid(a));
console.log(isValid(b));

// Time and Space Complexity:
Time Complexity: O(n), where n is the length of the string. Each character is processed once, and each stack operation (push and pop) is O(1).
Space Complexity: O(n) in the worst case, where n is the length of the string. This happens when all characters are opening brackets, and they are stored in the stack.









