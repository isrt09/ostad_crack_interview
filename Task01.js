class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function height(root) {
    if (root === null) {
        return 0; // Base case: height of an empty tree is 0
    }

    // Recursively find the height of left and right subtrees
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    // Height of the current node is max of left and right heights + 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
}

// Example input: [3,9,20,null,null,15,7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(height(root)); // Output: 3

// Time and Space Complexity
Time Complexity: O(n) The function visits every node exactly once, where n is the number of nodes in the tree.
Space Complexity: O(h)
