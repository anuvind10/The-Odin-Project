import { mergeSort, removeDuplicate } from "./arrayOperations.js";

class Node {
  constructor(data) {
    this.data = null;
    this.left = null;
    this.right = null;
  }
}

export class tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  buildTree() {
    this.array = mergeSort(this.array);
    this.array = removeDuplicate(this.array);

    console.log(this.array);
  }
}
