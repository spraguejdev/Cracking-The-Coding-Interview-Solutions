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
  maxDepth(root = this.root) {
    if (root == null) {
      return 0;
    }
    let left = this.maxDepth(root.left) + 1;
    let right = this.maxDepth(root.right) + 1;

    return Math.max(left, right);
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(9);
tree.insert(3);
tree.insert(2);

tree.insert(15);
tree.insert(20);
tree.insert(17);

// console.log(tree.dfsPostOrder());
// console.log(tree.dfsInOrder());
// console.log(tree.dfsPreOrder());
console.log(tree.maxDepth());
var maxDepth = function(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};

var maxDepth = function(root) {
  // use a handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
  return maxDepthHandler(root, 1);
};
var maxDepthHandler = function(root, num) {
  // here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
  if (root == null) {
    return 0;
  }
  // this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
  if (root.right == null && root.left == null) {
    return num;
  }
  //Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
  if (root.right && root.left) {
    return Math.max(
      maxDepthHandler(root.right, num + 1),
      maxDepthHandler(root.left, num + 1)
    );
  } else if (root.right != null) {
    return maxDepthHandler(root.right, num + 1);
  } else {
    return maxDepthHandler(root.left, num + 1);
  }
};

var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
