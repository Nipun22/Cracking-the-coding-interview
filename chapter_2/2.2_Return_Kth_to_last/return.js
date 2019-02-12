let LinkedList = require('./../linked-list');

LinkedList.prototype.kthFromLast = function (k) {
    let current = this.head;
    let previous = this.head;
    let count = 0;

    while (current != null) {
        if (count >= k) {
            previous = previous.next;
        }
        count++;
        current = current.next;
    }

    if (count < k) {
        return null;
    }
    return previous;
}

//testing here
//----------------//
let linked = new LinkedList();
linked.insert(20);
linked.insert(30);
linked.insert(50);
linked.insert(40);
linked.insert(20);
linked.insert(30);

linked.printList();

let l = linked.kthFromLast(3);
console.log(l.val);