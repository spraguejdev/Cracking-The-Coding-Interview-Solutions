/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  var queue = [],
    results = [],
    layer = [],
    currentNode;
  queue.push({ node: root, layer: 0 });
  while (queue.length) {
    currentNode = queue.shift();
    layer = [];
    if (currentNode.layer % 2 === 0) {
      results[currentNode.layer].push(currentNode.node.val);
    } else {
      results[currentNode.layer].unshift(currentNode.node.val);
    }
    if (results.length <= currentNode.layer) {
      results.push(layer);
    }
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
};
