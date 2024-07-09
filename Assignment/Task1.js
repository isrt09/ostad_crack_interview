function shuffleString(s, indices) {
    const n = s.length;
    const shuffled = new Array(n);
    
    for (let i = 0; i < n; i++) {
        shuffled[indices[i]] = s[i];
    }
    
    return shuffled.join('');
}

// Test output 
const s1 = "mamacode";
const s2 = "dosta";
const s3 = "abc";

const indices1 = [4,5,6,7,0,1,2,3];
const indices2 = [4,0,1,2,3];
const indices3 = [1,0,2];

console.log(shuffleString(s1, indices1)); 
console.log(shuffleString(s2, indices2)); 
console.log(shuffleString(s3, indices3)); 

// Time Complexity:
The time complexity of this solution is O(n), where n is the length of the string s or the number of elements in indices. 
This is because we iterate through each character of s once to place it correctly in the shuffled array.

// Space Complexity:
The space complexity is O(n) due to the extra space used to store the shuffled array.
