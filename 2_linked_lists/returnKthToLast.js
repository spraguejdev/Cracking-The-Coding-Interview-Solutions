// // Implement an algorithm to find the kth to last element of a singly linked list
const LinkedList = require("./linkedList");

var returnKthToLast = (list, k) => {
  var pointer1 = list.head;
  var pointer2 = list.head;

  for (let i = 0; i < k; i++) {
    if (pointer1 === null) return null;
    pointer1 = pointer1.next;
  }

  while (pointer1 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer2.value;
};

var list = new LinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.push(201);
list.push(205);
list.get(2);
list.print();

// console.log(returnKthToLast(list, 2));
