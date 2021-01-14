class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertBefore(item, nodeVal) {
        let currNode = this.head;
        let prevNode = this.head;
        
        if (!this.head) {
            return null;
        }

        if (this.head.value === nodeVal) {
            this.head = new _Node(item, this.head)
        }

        while ((currNode !== null && currNode.value !== nodeVal)) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        prevNode.next = new _Node(item, currNode)
    }
    insertAfter(item, nodeVal) {
        const newNode = new _Node(item);
        let currNode = this.head;

        while (currNode.next !== null && currNode.value !== nodeVal) {
            currNode = currNode.next;
        }

        const tail = currNode.next;
        currNode.next = newNode;
        newNode.next = tail;
    }
    insertAt(item, index) {
        const newNode = new _Node(item);

        let count = 0;
        let prevNode = this.head;
        let currNode = this.head;

        while (currNode.next !== null && count !== index) {
            prevNode = currNode;
            currNode = currNode.next;
            count ++;
        }

        if (count !== index) {
            console.log('No value given at index');
        }

        if (this.head.next === null) {
            this.head = newNode;
            newNode.next = currNode;
            return
        }

        prevNode.next = newNode;
        newNode.next = currNode;
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            /*Return null if its the end of the list
            and the item is not on the list*/
            if (currNode.next === null) {
                return null
            }
            else {
                //Otherwise, keep looking
                currNode = currNode.next
            }
        }
        //Found it
        return currNode;
    }
    remove(item) {
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode = this.head;
        //Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
};

/*Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
Number List: 1, 1, 1, 3, 4, 4, 5, 6, 6, 7 => Output: 1, 3, 4, 5, 6, 7*/

function removeDuplicates(list) {
    let currNode = list.head;

    while (currNode !== null) {
        let newNode = currNode

        while (newNode.next !== null) {
            if (newNode.next.value === currNode.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        currNode = currNode.next;
    }
    return currNode;
}

console.log(removeDuplicates(1, 1, 1, 3, 4, 4, 5, 6, 6, 7))