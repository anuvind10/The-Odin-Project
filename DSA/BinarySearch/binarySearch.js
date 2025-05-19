import { mergeSort, removeDuplicate } from "./arrayOperations.js";

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  buildTree(array) {
    array = mergeSort(array);
    array = removeDuplicate(array);

    let startIndex = 0;
    let endIndex = array.length - 1;
    if (startIndex > endIndex || array.length === 0) return null;

    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex + 1, array.length);

    let treeNode = new Node(
      array[midIndex],
      this.buildTree(leftArray),
      this.buildTree(rightArray)
    );

    this.root = treeNode;
    return this.root;
  }
}
