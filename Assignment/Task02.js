class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(); // Dummy node to simplify the merge logic
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // At this point, at least one of l1 or l2 is null.
    // Append the remaining elements of the non-null list
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next; // Return the merged list, which starts at dummy.next
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
let list1 = createLinkedList([1, 2, 4]); // Example input list1
let list2 = createLinkedList([1, 3, 4]); // Example input list2
let mergedHead = mergeTwoLists(list1, list2);
let mergedArray = linkedListToArray(mergedHead);

console.log(mergedArray); // Output: [1, 1, 2, 3, 4, 4]
