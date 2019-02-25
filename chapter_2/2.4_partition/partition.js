let LinkedList = require('./../linked-list');

LinkedList.prototype.partition = function (value) {
    let currentNode = this.head;
    let prevNode = this.head;
    
    while (currentNode != null) {
        if (currentNode.val < value) {
            //swap
            let temp = prevNode.val;
            prevNode.val = currentNode.val;
            currentNode.val = temp;
            //update position of prevNode
            prevNode = prevNode.next;
        }
        currentNode = currentNode.next;
    }
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
linked.partition(30);
linked.printList();