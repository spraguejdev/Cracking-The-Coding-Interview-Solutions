class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    var currentNode = this.head;
    var newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  shift() {
    if (!this.head) return false;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head) return null;
    if (index > this.length || index < 0) return null;
    var counter = 0;
    var currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index >= this.length || index < 0) return false;
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;
    newNode.next = temp;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var prevNode = this.get(index - 1);
    var currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    this.length--;
    return true;
  }

  reverse() {
    var currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    var nextNode;
    var prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new LinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.reverse();
list.print();
