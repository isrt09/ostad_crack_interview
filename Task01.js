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











