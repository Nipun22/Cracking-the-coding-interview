let LinkedList = require('./../linked-list');

const sumLists = function (list1, list2) {
    const listToNumber = function (l) {
        let l1head = l.head;
        let num = 0;
        let count = 0;
        while (l1head != null) {
            num = num + l1head.val * (10**count);
            count++;
            l1head = l1head.next;
        }
        return num;
    }

    const numberToList = (num) => {
        let temp = new LinkedList();

        while (num > 0) {
            temp.insert(num%10);
            num = Math.floor(num / 10);
        }

        return temp;
    }
    
    return numberToList(listToNumber(list1) + listToNumber(list2));
}

//testing here
//----------------//
let linked = new LinkedList();
linked.insert(7);
linked.insert(1);
linked.insert(6);

let linked2 = new LinkedList();
linked2.insert(5);
linked2.insert(9);
linked2.insert(2);

linked.printList();
linked2.printList();
res = sumLists(linked, linked2);
res.printList();
// -----------------//
//------------------//

let linked3 = new LinkedList();
linked3.insert(0);
linked3.insert(5);
linked3.insert(1);

let linked4 = new LinkedList();
linked4.insert(0);
linked4.insert(5);
linked4.insert(1);

linked3.printList();
linked4.printList();
res2 = sumLists(linked3, linked4);
res2.printList();

