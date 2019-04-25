class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, node = this.root) {
    var newNode = new Node(value);

    if (!node) {
      this.root = newNode;
    } else if (newNode.value > node.value) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insert(value, node.right);
      }
    } else {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insert(value, node.left);
      }
    }
    return this.root;
  }

  find(value, node = this.root) {
    if (value === node.value) {
      return true;
    } else if (value > node.value) {
      return !!(node.right && this.find(value, node.right));
    } else if (value < node.value) {
      return !!(node.left && this.find(value, node.left));
    }
  }

  bfs() {
    var data = [];
    var queue = [];
    var node = this.root;
    // Push root in queue
    queue.push(node);
    // While there is something in the queue
    while (queue.length) {
      // Get node.value fron queue
      node = queue.shift();
      // Add node.value to list
      data.push(node.value);
      // If there is a node to the left, push into queue
      if (node.left) queue.push(node.left);
      // If there is a node to the right, push into queue
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsPreOrder(node = this.root, data = []) {
    data.push(node.value);
    if (node.left) {
      this.dfsPreOrder(node.left, data);
    }
    if (node.right) {
      this.dfsPreOrder(node.right, data);
    }
    return data;
  }

  dfsPostOrder(node = this.root, data = []) {
    if (node.left) {
      this.dfsPostOrder(node.left, data);
    }
    if (node.right) {
      this.dfsPostOrder(node.right, data);
    }
    data.push(node.value);
    return data;
  }

  dfsInOrder(node = this.root, data = []) {
    if (node.left) {
      this.dfsInOrder(node.left, data);
    }
    data.push(node.value);
    if (node.right) {
      this.dfsInOrder(node.right, data);
    }
    return data;
  }
};

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(8);
// tree.insert(3);
// tree.insert(15);
// tree.insert(20);
// console.log(tree.dfsInOrder());
// // console.log(tree);
