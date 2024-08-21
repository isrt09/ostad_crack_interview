class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next; // Store the next node
        current.next = prev;         // Reverse the current node's pointer
        prev = current;              // Move prev to the current node
        current = nextNode;          // Move to the next node
    }
    
    return prev; // New head of the reversed list
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to convert linked list to array for easy testing and printing
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage
let inputArray = [1, 2, 3, 4, 5]; // Example input
let head = createLinkedList(inputArray);
let reversedHead = reverseList(head);
let reversedArray = linkedListToArray(reversedHead);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
