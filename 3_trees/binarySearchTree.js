class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(14);
tree.insert(8);
tree.insert(4);
tree.insert(19);
console.log(tree.find(1));

// console.log(tree);
