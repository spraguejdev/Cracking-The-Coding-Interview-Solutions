# Binary Heaps

> Another category of trees
> Everything that applies to trees, applies to heaps

# What is it?

> Maxbinaryhear, parent nodes are always larger than child nodes.
> Minbinaryheap, parent nodes are always smaller than both children
> Each node can only have a max of two children

## Max binary heap

> Each parent has at most two child nodes
> The value of each parent node is alwasy greater than its child nodes
> In a max binary heap the parent is greater than the chidren, but there are no guarantees between sibling nodes
> A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Min binary heap

> Opposite of max

## Why do we need to know this?

> Priority queues which are very commonly used data structures.
> Graph traversal algorithms

## Representing heaps

> We use an array to store a binary heap

## Priority Queue

> Wikipedia: A data structure where each element has a priority. Eleents with higher priorities are served before elements with lower priorities.
> Take one element at a time, that we are going to tackle next. Like an emergency room at a hosipital, everyone has a prioroty level, and the docter comes out and grabs the next persion who has the highest priority.
> Always serves the highest priority element.
> Seperate from heaps, they are an abstract concept. They can be implemented with a list.
> \*\* [Priority: 3, Priority: 2, Priority: 5] => Lowest number is 2, iterate over the entire thing to find the highest priority element.
