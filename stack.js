// Last in, first out
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return size;
  }

  pop() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  isEmpty() {
    return !!this.first;
  }
}
