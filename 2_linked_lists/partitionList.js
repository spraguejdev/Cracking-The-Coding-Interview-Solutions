const LinkedList = require("./linkedList");

const partitionList = (list, n) => {
  var beginningList = new LinkedList();
  var afterList = new LinkedList();

  var currentNode = list.head;
  while (currentNode !== null) {
    if (currentNode.value < n) {
      beginningList.push(currentNode.value);
    } else {
      afterList.push(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  var TEMP = afterList.tail;
  beginningList.tail = afterList.head;
  beginningList;
  return beginningList;
};

var list = new LinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.push(201);
list.push(201);
list.push(999);

console.log(partitionList(list, 350));
