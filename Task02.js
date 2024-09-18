class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function searchBST(root, val) {
    // Base case: if the current node is null, return null
    if (root === null) {
        return null;
    }
    
    // If the current node's value matches the target value, return the current node
    if (root.val === val) {
        return root;
    }
    
    // Since it's a BST, we can skip half of the tree:
    if (val < root.val) {
        return searchBST(root.left, val); // Search in the left subtree
    } else {
        return searchBST(root.right, val); // Search in the right subtree
    }
}

function insertIntoBST(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}
// Example input: [4,2,7,1,3], val = 2
const values = [4, 2, 7, 1, 3];
let root = null;
for (const value of values) {
    root = insertIntoBST(root, value);
}

const result = searchBST(root, 2);
console.log(result); // Output: TreeNode with val = 2

//Time and Space Complexity
Time Complexity: O(h), Where h is the height of the tree. In the worst case, you may need to traverse from the root to a leaf node. In a balanced BST, this would be O(logn), and in a skewed BST, it could be O(n).

Space Complexity: O(h)
The space complexity is determined by the maximum depth of the recursion stack, which is equal to the height of the tree. As mentioned, in a balanced BST, this would be O(logn), and in a skewed BST, it could be O(n).
