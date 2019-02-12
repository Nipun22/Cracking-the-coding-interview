let LinkedList = require('./../linked-list');

const removeDups = (l) => {
    let ll = l.head
    let set = new Set;
    let tempList = new LinkedList();
    while (ll != null) {
        if(!set.has(ll.val)){
            set.add(ll.val);
            tempList.insert(ll.val);
        }
        ll = ll.next;
    }
    return tempList;
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

let l = removeDups(linked);
l.printList();