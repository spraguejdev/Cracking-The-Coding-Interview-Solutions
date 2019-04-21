const LinkedList = require("./linkedList");

var deleteMiddleNode = node => {
  if (node === null) {
    return undefined;
  }
  var temp = node.next;
  node.value = temp.value;
  node.next = temp.next;
  return true;
};

var list = new LinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.push(201);
list.push(205);

var middle = list.get(3);

deleteMiddleNode(middle);

list.print();
