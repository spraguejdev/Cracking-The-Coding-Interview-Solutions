class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // Add to end
    this.values.push(val);
    var index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element < parent) {
        break;
      } else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }
  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new maxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(49);
heap.insert(41);
heap.insert(42);
heap.insert(43);
heap.insert(50);
heap.insert(51);
heap.insert(69);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
