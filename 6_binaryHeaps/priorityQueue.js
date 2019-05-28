// Lowest value is going to be served first.
class priorityQueue {
  constructor() {
    this.values = [];
    this.priority;
  }

  enqueue(val, priority) {
    // Add to end
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    var index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) {
        break;
      } else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }
  dequeue() {
    // Take first element and remove, and replace with last item
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // Bubble Down
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let queue = new priorityQueue();
queue.enqueue(55, 1);
queue.enqueue(45, 2);
queue.enqueue(49, 5);
queue.enqueue(41, 6);
queue.enqueue(42, 6);
queue.enqueue(43, 7);
queue.enqueue(50, 8);
queue.enqueue(51, 9);
queue.enqueue(69, 10);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.values);
