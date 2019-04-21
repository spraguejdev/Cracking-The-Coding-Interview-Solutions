const LinkedList = require("./linkedList");

var removeDups = linkedList => {
  var hash = {};
  var currentNode = linkedList.head;
  var previousNode = null;
  while (currentNode !== null) {
    // If the current node is in the hash table, then reasign previousNode to currentNode.next, thus deleting currentNode
    if (hash[currentNode.value] === true) {
      previousNode.next = currentNode.next;
    } else {
      // Insert value into hash
      hash[`${currentNode.value}`] = true;
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return linkedList.print();
};
// Time complexity is O(n) but space complexity of O(n)

var list = new LinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.push(201);
list.push(201);
console.log(removeDups(list));
