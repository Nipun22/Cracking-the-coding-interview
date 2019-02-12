let LinkedList = require('./../linked-list');

LinkedList.prototype.deleteMiddleNode = function (deleteNode) {
    if (!deleteNode || !deleteNode.next){
        return false;
    }
    let nextNode = deleteNode.next;
    deleteNode.val = nextNode.val;
    deleteNode.next = nextNode.next;
    return true;
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

let temp = linked.head.next;
linked.deleteMiddleNode(temp);
linked.printList();