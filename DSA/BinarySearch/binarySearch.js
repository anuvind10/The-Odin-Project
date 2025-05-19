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
    this.nodeCount = 0;
  }

  buildTree(array) {
    array = mergeSort(array);
    array = removeDuplicate(array);

    let startIndex = 0;
    let endIndex = array.length - 1;
    if (startIndex > endIndex || array.length === 0) return null;

    let midIndex = Math.floor((startIndex + endIndex) / 2);
    let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex + 1, array.length);

    let treeNode = new Node(
      array[midIndex],
      this.buildTree(leftArray),
      this.buildTree(rightArray)
    );

    if (this.nodeCount === 0) {
      this.root = treeNode;
    }

    this.nodeCount++;

    return treeNode;
  }
}
