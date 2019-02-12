class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(val) {
        let node = new Node(val);

        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            
            current.next = node;
        }

        this.size++;
    }

    insertNodeAt(val, index) {
        if (index < 0) {
            return false;
        } else if (index > 0 && index > this.size) {
            return false;
        } else {
            let node = new Node(val);
            let current, previous;

            current = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                let it = 0;

                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || (index > 0 && index > this.size)) {
            return -1;
        } else {
            let current, previous, it = 0;

            current = this.head;

            if (index === 0) {
                this.head = current.next;
            } else {
                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.size--;

            return current.val;
        }
    }

    removeVal(val) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.val === val) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }

                this.size--;
                return current.val;
            }
            previous = current;
            current = current.next;
        }

        return -1;
    }


    //HELPER FUNCTIONS

    indexOf(val) {
        let count = 0;
        let current = this.head;

        while(current != null) {
            if (current.val === val) {
                return count; 
            }
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        let current = this.head;
        let arr = [];

        while(current !== null) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

module.exports = LinkedList;


// let ll = new LinkedList();

// console.log(ll.isEmpty());

// ll.insert(10);
// ll.printList();

// console.log(ll.sizeOfList());

// ll.insert(20);
// ll.insert(30);
// ll.insert(40);
// ll.insert(50);

// ll.printList();

// console.log("is element removed ? " + ll.removeVal(50));

// ll.printList();

// console.log("Index of 40 " + ll.indexOf(40));

// ll.insertNodeAt(60, 2);

// ll.printList();

// console.log("is list empty ? " + ll.isEmpty());

// console.log(ll.removeFrom(3));

// ll.printList();