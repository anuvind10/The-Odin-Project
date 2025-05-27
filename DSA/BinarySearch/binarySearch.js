import { mergeSort, removeDuplicate } from "./arrayOperations.js";

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class tree {
  constructor(array) {
    const cleanArry = removeDuplicate(mergeSort(array));
    this.root = this.buildTree(cleanArry);
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const midIndex = Math.floor(array.length / 2);

    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex + 1);

    let treeNode = new Node(
      array[midIndex],
      this.buildTree(leftArray),
      this.buildTree(rightArray)
    );

    return treeNode;
  }

  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root;
    let nodeDirection;

    if (!this.root) {
      this.root = newNode;
      return;
    }

    while (currentNode) {
      if (value < currentNode.data) {
        nodeDirection = "left";
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else break;
        nodeDirection = "left";
      } else if (value > currentNode.data) {
        nodeDirection = "right";
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else break;
      } else if (value === currentNode.data) {
        return;
      }
    }

    if (nodeDirection === "left") {
      currentNode.left = newNode;
    } else {
      currentNode.right = newNode;
    }
  }

  deleteItem(value) {
    let currentNode = this.root;
    let previousNode;
    let nextNode;
    let nodeDirection;

    if (this.root.left === null && this.root.right === null) {
      this.root = null;
      return;
    }

    while (currentNode) {
      if (currentNode.data === value) {
        // node that does not have a child
        if (currentNode.left === null && currentNode.right === null) {
          if (nodeDirection === "left") {
            previousNode.left = null;
          } else {
            previousNode.right = null;
          }
          return;
        }
        // Has one child
        else if (currentNode.left === null) {
          nextNode = currentNode.right;
          previousNode.right = nextNode;
        } else if (currentNode.right === null) {
          nextNode = currentNode.left;
        }
        // Has both childs
        else {
          return;
        }
        if (nodeDirection === "left") {
          previousNode.left = nextNode;
        } else {
          previousNode.right = nextNode;
        }
        return;
      } else if (value < currentNode.data) {
        nodeDirection = "left";
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else {
        nodeDirection = "right";
        previousNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    if (!this.root) return;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data == value) {
        return currentNode;
      }

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      }
    }

    return "Not Found";
  }

  levelOrder(callback) {
    if (!this.root) return;

    let queue = [this.root];

    if (!callback) {
      throw new Error("Callback Function is required");
    }

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      traverse(node.left);
      callback(node);
      traverse(node.right);
    }

    traverse(this.root);
  }

  preOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      callback(node);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
  }

  postOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      traverse(node.left);
      traverse(node.right);
      callback(node);
    }

    traverse(this.root);
  }
}
