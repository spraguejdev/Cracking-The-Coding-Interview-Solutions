const BinarySearchTree = require("./binarySearchTree");

// Give a binary tree, return the layer order traversal of its nodes' values. From left to right, level by level

function binaryTreeLevelTraversal(root) {
  if (!root) return [];
  var queue = [],
    results = [],
    layer = [],
    currentNode;

  queue.push({ node: root, layer: 0 });
  while (queue.length) {
    currentNode = queue.shift();
    layer = [];
    if (results.length <= currentNode.layer) {
      results.push(layer);
    }
    results[currentNode.layer].push(currentNode.node.value);
    if (currentNode.node.left) {
      queue.push({ node: currentNode.node.left, layer: currentNode.layer + 1 });
    }
    if (currentNode.node.right) {
      queue.push({
        node: currentNode.node.right,
        layer: currentNode.layer + 1
      });
    }
  }
  return results;
}

// var binaryTreeLevelTraversal = function(root) {
//   if (root === null) return [];
//   var queue = [];
//   var results = [];
//   var oneLevel = [];
//   queue.push(root);
//   var currentLevel = 1;
//   var nextLevel = 0;
//   while (queue.length > 0) {
//     var temp = queue.shift();
//     oneLevel.push(temp.value);
//     currentLevel--;

//     if (temp.left) {
//       queue.push(temp.left);
//       nextLevel++;
//     }
//     if (temp.right) {
//       queue.push(temp.right);
//       nextLevel++;
//     }

//     if (currentLevel === 0) {
//       results.push(oneLevel);
//       oneLevel = [];
//       currentLevel = nextLevel;
//       nextLevel = 0;
//     }
//   }
//   return results;
// };

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
tree.insert(20);
console.log(binaryTreeLevelTraversal(tree.root));
