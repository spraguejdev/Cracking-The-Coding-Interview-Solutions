const BinarySearchTree = require("./binarySearchTree");

var isSymmetric = function(root) {
  if (!root) {
    // Sanity check
    return true;
  }
  function isMirror(s, t) {
    var q1 = [s],
      q2 = [t];

    // Perform breadth-first search
    while (q1.length > 0 || q2.length > 0) {
      // Dequeue
      var n1 = q1.shift(),
        n2 = q2.shift();

      // Two null nodes, let's continue
      if (!n1 && !n2) continue;

      // Return false as long as there is a mismatch
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      // Scan tree s from left to right
      // and scan tree t from right to left
      q1.push(n1.left);
      q1.push(n1.right);
      q2.push(n2.right);
      q2.push(n2.left);
    }

    return true;
  }

  return isMirror(root.left, root.right);
};

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
console.log(isSymetric(tree));
